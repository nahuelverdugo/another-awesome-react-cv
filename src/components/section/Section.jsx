import React from 'react'
import { injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import translations from '../../translations/section'

class Section extends React.Component {
  render () {
    return (
      <div className={`section ${this.props.section}`}>
        <div className='section--header'>
          <FontAwesomeIcon icon={this.props.icon} className='section--icon' fixedWidth/>
          <p className='section--title'>
            {this.props.intl.formatMessage(translations[this.props.section])}
          </p>
        </div>
        <div className='section--content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default injectIntl(Section);