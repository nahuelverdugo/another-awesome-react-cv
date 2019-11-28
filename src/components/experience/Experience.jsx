import React, { Fragment } from 'react'
import { injectIntl } from 'react-intl'
import Section from '../section/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import translations from '../../translations/experience'

class Experience extends React.Component {
  render () {
    return (
      <Section section={'experiences'} icon={'suitcase'}>
        {this.props.experience.sort((ex1,ex2) => ex1.startYear > ex2.startYear ? -1 : 1).map((experience, i) => (
          <div className='experience cv-data' key={i}>
            <div className='cv-data-years no-small-phone'>
              <div className='cv-data-years--end'>
                {(experience.endYear) ? <Fragment><span>{experience.endMonth}</span> <span>{experience.endYear}</span></Fragment> : '-'}
              </div>
              <div className='cv-data-years--start'>
                <span>{experience.startMonth}</span> <span>{experience.startYear}</span>
              </div>
            </div>
            <div className='experience-data cv-data-info divider'>
              <div className='experience-info'>
                <span className='experience-info--position'>{experience.position},</span>
                <span className='experience-info--company'>{experience.company},</span>
                <span className='experience-info--country'>{experience.country}</span>
              </div>
              <div className='cv-data-years small-phone'>
                <div className='cv-data-years--start'>
                  <span>{experience.startMonth}</span> <span>{experience.startYear}</span>
                </div>
                <div className='cv-data-years--end'>
                  {(experience.endYear) ? <Fragment><span>{experience.endMonth}</span> <span>{experience.endYear}</span></Fragment> : this.props.intl.formatMessage(translations.present)}
                </div> 
              </div>
              <div className='experience-description'>
                {experience.description}
              </div>
              <div className='experience-tasks'>
                <div className='experience-tasks--list'>
                {experience.tasks.map((task, i) => (
                  <div className='experience-tasks--elem' key={i}>
                    <div className='bullet'>
                      <FontAwesomeIcon icon='chevron-right' fixedWidth/>
                    </div>
                    <div className='value'>
                      {task}
                    </div>
                  </div>
                ))}
                </div>
              </div>
              <div className='experience-technologies'>
                {experience.technologies.map((technology, i) => (
                  <span className='experience-technologies-key' key={i}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Section>
    );
  }
}

export default injectIntl(Experience);