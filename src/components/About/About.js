import React from 'react'
import './About.css'
import aboutimg from '../../assets/images/about-img.png'
import Button from '../Button/Button'
const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about__content'>
            <h1>About us</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur blanditiis totam cumque a quos quia ratione odit similique, omnis debitis!</p>
            <Button text='Know More'/>
        </div>
        <img src={aboutimg} />
    </div>
  )
}

export default About