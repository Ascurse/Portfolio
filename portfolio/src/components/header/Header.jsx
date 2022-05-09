import React from 'react'
import './Header.css'
import code from './code.png'

const Header = () => {
  return (
    <div className='container'>
      <div className='left'>
        <img src={code} width="30" height="30"/>
        <h3>@Ascurse Web-Developer</h3>
      </div>
      <nav className='right'>
        <span>Projects</span>
        <span>About me</span>
        <span>Contacts</span>
      </nav>
    </div>
  )
}

export default Header