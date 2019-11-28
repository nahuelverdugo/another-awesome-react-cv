import React from 'react'
import { injectIntl } from 'react-intl'
import Section from '../section/Section'
import translations from '../../translations/skills'

class Skills extends React.Component {  
  render () {
    const skills = this.props.skills;
    return (
      <Section section={'skills'} icon={'tasks'}>
        {Object.keys(skills).map((skill, i) => (
          <div key={i} className='skill-line'>
            <div className='skill-title'>
              {this.props.intl.formatMessage(translations[skill])}
            </div>
            <div className='skill-list'>
              <ul>
                {skills[skill].map((el, i)=> <li key={i}>{el.startsWith("*") ? (<strong>{el.substr(1)}</strong>) : el}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </Section>
    );
  }
}

export default injectIntl(Skills);