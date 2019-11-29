import * as fs from 'fs';
import { sync as globSync } from 'glob';
import { sync as mkdirpSync } from 'mkdirp';

const MESSAGES_PATTERN = './src/messages/**/*.json';
const LANG_DIR = './src/lang/';
const LANG_INDEX_PATH = `${LANG_DIR}index.js`;

const TRANSLATE = 'TRANSLATE';
const CHECK = 'CHECK TRANSLATION';
const OLD = 'OLD TRANSLATION';

const ESCAPED_CHARS = {
  '\\': '\\\\',
  '\\#': '\\#',
  '{': '\\{',
  '}': '\\}'
};

const ESAPE_CHARS_REGEXP = /\\#|[{}\\]/g;

export default function printICUMessage (ast) {
  return ast.elements.reduce((message, el) => {
    const {
      format, id, type, value
    } = el;

    if (type === 'messageTextElement') {
      return message + value.replace(ESAPE_CHARS_REGEXP, char => ESCAPED_CHARS[char]);
    }

    if (!format) {
      return `${message}{${id}}`;
    }

    const formatType = format.type.replace(/Format$/, '');

    let style,
      offset,
      options;

    switch (formatType) {
      case 'number':
      case 'date':
      case 'time':
        style = format.style ? `, ${format.style}` : '';
        return `${message}{${id}, ${formatType}${style}}`;

      case 'plural':
      case 'selectOrdinal':
      case 'select':
        offset = format.offset ? `, offset:${format.offset}` : '';
        options = format.options.reduce((str, option) => {
          const optionValue = printICUMessage(option.value);
          return `${str} ${option.selector} {${optionValue}}`;
        }, '');
        return `${message}{${id}, ${formatType}${offset},${options}}`;
    }
  }, '');
}

const defaultMessages = globSync(MESSAGES_PATTERN)
  .map(filename => fs.readFileSync(filename, 'utf8'))
  .map(file => JSON.parse(file))
  .reduce((collection, descriptors) => {
    descriptors.forEach(({ id, defaultMessage }) => {
      if (collection.hasOwnProperty(id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      collection[id] = defaultMessage;
    });
    return collection;
  }, {});

const saveDestLang = function (lang, messages, oldMessages) {
  let messagesTranslated = {};
  if (fs.existsSync(`${LANG_DIR}${lang}.js`)) {
    let oldMessagesTranslated = require(`../lang/${lang}.js`)[lang].messages;
    messagesTranslated = Object.assign(...Object.keys(messages).map(k => {
      if (oldMessages[k] != null) {
        if (oldMessagesTranslated[k] != null && messages[k] !== oldMessages[k]) {
          return ({[k]: `(${CHECK}) ${messages[k]} ${OLD} ${oldMessagesTranslated[k]}`});
        }
        if (oldMessagesTranslated[k] != null && messages[k] === oldMessages[k]) {
          return ({[k]: `${oldMessagesTranslated[k]}`});
        }
      }
      return ({[k]: `(${TRANSLATE}) ${messages[k]}`});
    }));
  } else {
    messagesTranslated = Object.assign(...Object.keys(messages).map(k => ({[k]: `(TRANSLATE) ${messages[k]}`})));
  }
  fs.writeFileSync(`${LANG_DIR}${lang}.js`, `export const ${lang} = {\n  "lang": "${lang}",\n  "messages":${JSON.stringify(messagesTranslated, null, 2).split('\n').map(e => `  ${e}`).join('\n')
    .substring(1)}\n}`);
};

mkdirpSync(LANG_DIR);

// const args = process.argv.slice(2);
// const defaultLang = args[0] != null ? args[0] : 'en';
// const destLangs = args[1] != null ? args[1].split(',') : ['es'];

let langs = Object.keys(require('../assets/config/index.js').default.cvs);
let destLangs = [ ...langs ];
const defaultLang = destLangs[0];
destLangs.splice(0, 1);

let oldDefaultMessages = null;
if (fs.existsSync(`${LANG_DIR}${defaultLang}.js`)) {
  oldDefaultMessages = require(`../lang/${defaultLang}.js`)[defaultLang].messages;
}

fs.writeFileSync(`${LANG_DIR}${defaultLang}.js`, `export const ${defaultLang} = {\n  "lang": "${defaultLang}",\n  "messages":${JSON.stringify(defaultMessages, null, 2).split('\n').map(e => `  ${e}`).join('\n')
  .substring(1)}\n}`);

destLangs.forEach(lang => saveDestLang(lang, defaultMessages, oldDefaultMessages));

if (fs.existsSync(LANG_INDEX_PATH)) {
  fs.unlinkSync(LANG_INDEX_PATH);
}

fs.writeFileSync(LANG_INDEX_PATH, `${langs.map(lang => `import { ${lang} } from './${lang}'`).join('\n')}\n\n` + 
  `const langs = {\n` +                                                            
  `${langs.map((lang, i) => `  "${lang}": ${lang}${i < langs.length - 1 ? ',' : ''}`).join('\n')}` +
  `\n}\n\n` +
  `export default langs;`);
