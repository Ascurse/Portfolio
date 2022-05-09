import React from 'react'
import './Contacts.css'
import github from './assets/github.svg'
import telegram from './assets/telegram.svg'
import mail from './assets/envelope.svg'
import resume from './assets/resume.svg'

const Contacts = () => {
  return (
    <div className='contacts__container'>
      <h1>Contact me!</h1>
      <div className='contact__links'>
        <a href='https://github.com/Ascurse' target='_blank'>
					<img src={github} alt='github_link' /> 
        </a>
				<a href='https://t.me/Ascurse' target='_blank'>
					<img src={telegram} alt='telegram_link' /> 
        </a>
				<a href='mailto:suomi7862535@gmail.com' target='_blank'>
					<img src={mail} alt='mail_link' /> 
        </a>
				<a href='https://hh.ru/resume/6bb8e19bff09e6e28e0039ed1f683769487036' target='_blank'>
					<img src={resume} alt='resume_link' /> 
        </a>
      </div>
    </div>
  )
}

export default Contacts