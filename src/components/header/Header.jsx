import React from 'react'
import { injectIntl } from 'react-intl'
import translations from '../../translations/header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  render () {
    const header = this.props.header;
    return (
        <div className='section header'>
          <div className='header-photo-container'>
            <img className='header-photo-container--picture' 
                 src={header.photoLink} 
                 alt={this.props.intl.formatMessage(translations.imageAlt)} />
          </div>
          <div className='header-info'>
            <div className='header-fullname' >
              <p className='header-fullname--name'>{header.name}</p>
              <p className='header-fullname--surname'>{header.surname1}</p>
              <p className='header-fullname--surname'>{header.surname2}</p>
            </div>
            <div className='header-position'>
              <span>{header.position}</span>
            </div>
            <div className='header-contact'>
              <p className='header-contact--link'>
                <FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth/>
                <a className='link' href={`https://www.linkedin.com/in/${header.contact.linkedin}`}>linkedin.com/in/{header.contact.linkedin}</a>
              </p>
              <p className='header-contact--link add-space'>
                <FontAwesomeIcon icon={['fab', 'github']} fixedWidth/>
                <a className='link' href={`https://github.com/${header.contact.github}`}>github.com/{header.contact.github}</a>
              </p>
            </div>
            <div className='header-contact'>
              { header.contact.phone && 
                <p className='header-contact--link'>
                  <FontAwesomeIcon icon='phone' fixedWidth/>
                  <a className='no-link' href={`tel:${header.contact.phone}`}>{header.contact.phone}</a>
                </p>
              }
              <p className={`header-contact--link ${header.contact.phone ? 'add-space' : ''}`}>
                <FontAwesomeIcon icon='at' fixedWidth/>
                <a className='no-link' href={`mailto:${header.contact.email}`}>{header.contact.email}</a>
              </p>
            </div>
            <div className='header-city'>
              <FontAwesomeIcon icon='map-marker' fixedWidth/>
              <span>{header.city}</span>
            </div>
            <div className='header-extra-info'>
              <FontAwesomeIcon icon='info-circle' fixedWidth/>
              <span>{header.extraInfo}</span>
            </div>
          </div>
        </div>
    );
  }
}

export default injectIntl(Header);