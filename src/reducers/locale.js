import langs from '../lang'
import * as locale from '../actions/locale'

const initialState = {
  lang: langs[Object.keys(langs)[0]].lang, 
  messages: langs[Object.keys(langs)[0]].messages
};

export default(state = initialState, action) => {
  switch (action.type) {
    case locale.LOCALE_CHANGE:
        return langs[action.locale] ? { 
          lang: langs[action.locale].lang, 
          messages: langs[action.locale].messages 
        } : {
          lang: langs[Object.keys(langs)[0]].lang, 
          messages: langs[Object.keys(langs)[0]].messages 
        };
    default:
      return state;
  }
};

export function getLocale (state) {
  if (state.lang) {
    return state.lang;
  }
}
