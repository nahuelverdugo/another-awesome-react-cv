import React from 'react'
import Section from '../section/Section'
import { injectIntl } from 'react-intl'
import translations from '../../translations/education'

class Education extends React.Component {
  render () {
    return (
      <Section section={'educations'} icon={'graduation-cap'}>
      {this.props.education.sort((ed1,ed2) => ed1.startYear > ed2.startYear ? -1 : 1).map((education, i) => (
        <div className='education-info cv-data' key={i}>
          <div className='cv-data-years no-small-phone'>
          {(education.endYear) ? <span>{education.startYear} - {education.endYear}</span> : <span>{education.startYear} -</span>}
          </div>
          <div className='education-data cv-data-info'>
            <div className='education-data-title'>
              <span className='education-data-title--name'>{education.title}</span> - <span className='education-data-title--mark'>{education.avgMark}</span>
            </div>
            <div className='cv-data-years small-phone'>
            {(education.endYear) ? <span>{education.startYear} - {education.endYear}</span> : <span>{education.startYear} - {this.props.intl.formatMessage(translations.present)}</span>}
            </div>
            <div className='education-university'>
              {education.university}
            </div>
            <div className='education-major-subjects'>
              <span>{this.props.intl.formatMessage(translations.majorSubjects)}:</span>
              <ul>
              {education.majorSubjects.map((subject, i) => (
                <li key={i}>{subject}</li>
              )).reduce((prev, curr) => [prev, ', ', curr])}
              </ul>.
            </div>
            <div className='education-thesis'>
              <span>{this.props.intl.formatMessage(translations.thesis)}:</span> {education.thesis}
            </div>
          </div>
        </div>
      ))}
      </Section>
    );
  }
}

export default injectIntl(Education);