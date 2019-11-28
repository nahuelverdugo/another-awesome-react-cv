import React from 'react'
import Section from '../section/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { injectIntl } from 'react-intl'
import translations from '../../translations/references'

class References extends React.Component {
  render () {
    return (
      <Section section={'references'} icon={'quote-left'} half>
        <div className='references-list'>
        { this.props.references && !this.props.references.length ? 
          <div className='references-list--empty'>
            {this.props.intl.formatMessage(translations.noReference)}
          </div> : 
          this.props.references.map((reference, i) => <div key={i} className='references-item'>
            <div className='references-item--name'>{reference.name}</div>
            <div className='references-item--title'>{reference.title}</div>
            <div className='references-item--composed'>
              <span className='references-item--icon'>
                <FontAwesomeIcon icon='at'/>
              </span>
              <span className='references-item--value'>
                {reference.email}
              </span>
            </div>
            <div className='references-item--composed'>
              <span className='references-item--icon'>
                <FontAwesomeIcon icon='phone'/>
              </span>
              <span className='references-item--value'>
                <a href={`tel:${reference.phone}`}>{reference.phone}</a>
              </span>
            </div>
          </div>)
        }
        </div>
      </Section>
    );
  }
}

export default injectIntl(References);