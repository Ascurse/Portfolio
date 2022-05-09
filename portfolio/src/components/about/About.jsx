import React from 'react'
import './About.css'
import avatar from './avatar.jpg'
import python from './assets/python.png'
import django from './assets/django.svg'
import restframework from './assets/restframework.png'
import javascript from './assets/javascript.png'
import react from './assets/react.png'
import sass from './assets/Sass_logo.png'

const About = () => {
  return (
    <div className="container__abt">
        <h1>Information</h1>
        <div className="wrapper__abt">
            <div className='aboutme'>
                <h2>About me:</h2>
                <div className='personal__container'>
                    <img className='person__img' src={avatar}/>
                    <div className='person__info'>
                        Hello, my name is Maximilian Shupyro. 
                        I'm a web-developer located at Moscow, Russia. 
                        I create both frontend and backend, but frontend is what I love a little bit more :) 
                        I always try to learn new technologies and improve my knowledge. 
                        Feel free to check out my GitHub!
                    </div>
                </div>
            </div>
            <div className='technologies'>
                <h2>My stack:</h2>
                <div className='stack__container'>
                    <div className='backend__wrapper'>
                        <h3>Backend</h3>
                        <div className='img__container'>
                            <img src={python} />
                            <img src={django} />
                            <img src={restframework} />
                        </div>
                    </div>
                    <div className='frontend__wrapper'>
                        <h3>Frontend</h3>
                        <div className='img__container'>
                            <img src={javascript} />
                            <img src={react} />
                            <img src={sass} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About