import React from 'react'
import { injectIntl } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import translations from '../../translations/downloadFooter'

class DownloadFooter extends React.Component {
  render () {
    return (
        <div className='section download-footer'>
          <div className='download-footer-link'>
            <a className='link' target='blank' href={this.props.downloadLink}><FontAwesomeIcon icon='download'/></a>
          </div>
          <div>
            <p>{this.props.intl.formatMessage(translations.made)} <FontAwesomeIcon icon='heart' className='download-footer-icon'/> {this.props.intl.formatMessage(translations.malaga)}</p>
            <p>{this.props.intl.formatMessage(translations.based)} <a className='link' href='https://github.com/darwiin/yaac-another-awesome-cv'>{this.props.intl.formatMessage(translations.awesome)}</a>!</p>
          </div>
        </div>
    );
  }
}

export default injectIntl(DownloadFooter);