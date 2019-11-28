import React from 'react'
import { injectIntl } from 'react-intl'
import config from './assets/config'
import CV from './components/cv/CV'
import { localeChange } from './actions/locale'
import { connect } from 'react-redux'
import { Helmet } from "react-helmet"
import ReactGA from 'react-ga'

ReactGA.initialize(config.googleAnalytics);
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      langs: Object.keys(config.cvs)
    }; 
  }

  componentDidMount() {
    console.log("a");
    if (this.props.match.params.lang !== this.props.intl.locale && this.isValidLang(this.props.match.params.lang)) {
      console.log("a");
      this.props.dispatch(localeChange(this.props.match.params.lang));
    }
  }
  
  componentDidUpdate(prevProps){
    console.log("f");
    if (prevProps.match.params.lang !== this.props.match.params.lang && this.isValidLang(this.props.match.params.lang)) {
      console.log("c");
      console.log(this.props.match.params.lang);
      this.props.dispatch(localeChange(this.props.match.params.lang));
    }

  }

  isValidLang(lang) {
    return this.state.langs.includes(lang);
  }
  
  render () {
    console.log(this.props.intl.locale);
    const website = config.website[this.props.intl.locale];
    return (
      <div className="container">
        <Helmet>
            <title>{website.title}</title>
            <meta name="description" content={website.description} />
        </Helmet>
        <CV cv={config.cvs[this.props.intl.locale]} langs={this.state.langs} />
      </div>
    );
  }

}

export default injectIntl(connect()(App));
