import React from 'react'
import header from '../../assets/images/header-food.png'
import Button from '../Button/Button'
import './Header.css'
const Header = () => {
  return (
    <div className='header' id='home'>
        <img className='header__image' src={header} />
        <div className='header__content'>
            <h1>EAT<br/>HEALTHY<br/>BE HEALTHY</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
            <Button text='Order Now'></Button>
        </div>
    </div>
  )
}

export default Header