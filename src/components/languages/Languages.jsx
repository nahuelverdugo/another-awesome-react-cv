import React from 'react'
import Section from '../section/Section'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Languages extends React.Component {
  render () {
    const languages = this.props.languages;
    return (
      <Section section={'languages'} icon={'language'} half>
        {languages.map((language, i) => (
        <div key={i} className='language'>
          <div className='language-name'>
            {language.name}
          </div>
          <div className='language-title'>
            {language.levelTitle}
          </div>
          <div className='language-level'>
            {
              new Array(language.level).fill(0).map((e, i) => 
                <FontAwesomeIcon key={i} icon='circle' className='language-level--point'/>)
            }
            {
              new Array(6 - language.level).fill(0).map((e, i) => 
                <FontAwesomeIcon key={i} icon='circle' className='language-level--point language-level--point-off'/>)
            }
          </div>
        </div>))}
      </Section>
    );
  }
}

export default Languages;