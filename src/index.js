import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import ReduxConnectedIntlProvider from './reduxConnectedIntlProvider'
import App from './App'
import './assets/scss/index.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap, faLanguage, faQuoteLeft, 
         faTasks, faSuitcase, faCircle, faHeart, 
         faDownload, faAt, faPhone, faInfoCircle,
         faMapMarker, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Route, BrowserRouter } from "react-router-dom"

library.add(faGraduationCap, faLanguage, faInfoCircle, faQuoteLeft, faTasks, faSuitcase, 
  faCircle, faHeart, faChevronRight, faMapMarker,faDownload, faAt, faPhone, faGithub, faLinkedin)

ReactDOM.render((<Provider store={store}>
    <ReduxConnectedIntlProvider>
      <BrowserRouter>
        <Route path="/:lang" component={App} />
        <Route exact path="/" component={App} />
      </BrowserRouter>
    </ReduxConnectedIntlProvider>
  </Provider>), 
  document.getElementById('root'));
