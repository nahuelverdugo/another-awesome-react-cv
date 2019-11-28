import cv_en from './cv_en.json'
import cv_es from './cv_es.json'
import cv_fr from './cv_fr.json'

const config = {
  "googleAnalytics": "UA-000000000-1",
  "website": {
    "en": {
      "title": "My CV - John Doe",
      "description": "Just a landing page to my CV."
    },
    "es": {
      "title": "Mi CV - John Doeo",
      "description": "Solo una página estática con mi CV."
    },
    "fr": {
      "title": "Mon CV - John Doeo",
      "description": "Juste une page statique avec mon CV."
    }
  },
  "cvs": {
    "en": cv_en,
    "es": cv_es,
    "fr": cv_fr
  }
};

export default config;