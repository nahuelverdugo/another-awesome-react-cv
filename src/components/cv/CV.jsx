import React from 'react'
import { injectIntl } from 'react-intl'
import Menu from '../menu/Menu'
import Header from '../header/Header'
import Experience from '../experience/Experience'
import Education from '../education/Education'
import Skills from '../skills/Skills'
import Languages from '../languages/Languages'
import References from '../references/References'
import DownloadFooter from '../downloadFooter/DownloadFooter'

class CV extends React.Component {

  render () {
    const cv = this.props.cv;
    const langs = this.props.langs;
    console.log("x");
    return (
      <div className='cv'>
        <Menu langs={langs} />
        <Header header={cv.header} />
        <Experience experience={cv.experience} />
        <Education education={cv.education} />
        <Skills skills={cv.skills} />
        <div className='section-wrapper'>
          <Languages languages={cv.languages} />
          <References references={cv.references} />
        </div>
        <DownloadFooter downloadLink={cv.link} />
      </div>
    );
  }
}

export default injectIntl(CV);