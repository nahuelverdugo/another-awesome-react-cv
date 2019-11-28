import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'

class Menu extends React.Component {
  render () {
    return (
        <ul className='menu'>
          {this.props.langs.map((lang, i) => 
            <li key={i} className={`menu--item-${lang === this.props.intl.locale ? 'selected' : ''}`}>
              <Link key={i} to={`/${lang}`}>{lang}</Link>
            </li>)} 
        </ul>
    );
  }
}

export default injectIntl(Menu);