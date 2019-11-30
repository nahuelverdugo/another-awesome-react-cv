# another-awesome-react-cv

This project is a simple, self-hosted landing CV site outside of the common social networks as Linkedin. The design was taken from another github project [YAAC: Another Awesome CV](https://github.com/darwiin/yaac-another-awesome-cv) which I used for my CV.

For a live demo check [another-awesome-react-cv](https://another-awesome-react-cv.githug.io).

## How to use it

### Configuration

The whole CV sections like experience, education, skills, etc. are configured via JSON files, each per language, in `src/config/` and the format used is [this one](#json-file-example).

After creating your JSON CV files with your translations, the next step consits in adding them to the config file in `src/config/index.js` as is showed below:

```javascript
import cv_en from './cv_en.json'

const config = {
  "googleAnalytics": "",
  "website": {
    "en": {
      "title": "",
      "description": ""
    }
  },
  "cvs": {
    "en": cv_en
  }
};

export default config;
```

In the "cvs" object you have to add a language code (en, es, fr, de, etc.) and a CV per language e.g. `"es": cv_es`. In this file you can add also a Google Analytics tracking id and you have to add a title and description per language too.

### Translate

For translating the project from a console in the root directory of the project you have to do `npm install` and `npm run translate`. Once you have done this, you will find the translations files in `src/lang`. There will be one translation js file (e.g. fr.js) per each CV language configured and you have to check and translate them.

### Colors

Colors are also customizable from the file `src/assets/scss/_common.scss` where you can modify some of them like the background or the main color.

### Build and Deploy

Deploying the site using [Github Pages](https://pages.github.com/) is quite easy, you have to edit the `package.json` file and replace the `homepage` property with your repository homepage and the run from the console `npm run deploy`. It will ask for your user name and password and that's all.

For only building you can do `npm run build` and for testing it locally before deploying use `npm run start`.

## JSON file example

```javascript
{
  "link": "",
  "header": {
    "name": "",
    "surname1": "",
    "surname2": "",
    "position": "",
    "city": "",
    "extraInfo": "",
    "photoLink": "",
    "contact": {
      "linkedin": "",
      "github": "",
      "email": ""
    }
  },
  "experience": [
    {
      "startYear": 0,
      "startMonth": "",
      "endYear": 0,
      "endMonth": "",
      "position": "",
      "company": "",
      "country": "",
      "description": "",
      "tasks" : [],
      "technologies": []
    }
  ],
  "education": [
    {
      "startYear": 0,
      "endYear": 0,
      "title": "",
      "avgMark": "",
      "university": "",
      "majorSubjects": [],
      "thesis": ""
    }
  ],
  "skills" : {
    "skill": [],
  },
  "languages" : [
    {
      "name" : "",
      "level": 0,
      "levelTitle": ""
    },
  ],
  "references": [
    {
      "name": "",
      "email": "",
      "phone": ""
    }
  ]
}
```