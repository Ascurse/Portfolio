import React from 'react'
import './Header.css'
import code from './code.png'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
  return (
    <div className='container' id="header">
      <div className='left'>
        <img src={code} width="60" height="60"/>
        <h2>@Ascurse Web-Developer</h2>
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