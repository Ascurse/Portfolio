import React from 'react'
import './Header.css'
import code from './code.png'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className='container' id="header">
      <div className='left'>
        <img src={code} width="30" height="30"/>
        <h3>@Ascurse Web-Developer</h3>
      </div>
      <nav className='right'>
        <HashLink smooth to="#projects">
          <span>Projects</span>
        </HashLink>
        <HashLink smooth to="#about">
          <span>About Me</span>
        </HashLink>
        <HashLink smooth to="#contacts">
          <span>Contacts</span>
        </HashLink>
      </nav>
    </div>
  )
}

export default Header