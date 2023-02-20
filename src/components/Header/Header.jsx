import React from 'react'
import {Link}from 'react-router-dom';
import Button from '../../Assets/Img/Header/button.svg'
import SiteLogo from '../../Assets/Img/Header/logo.svg'
import "./Header.scss";


function Header() {
  

  return (
    <header className='site-header'>
      <div className='container'>
        <div className='header'>
          <button className='header__button'>
            <img src={Button} alt="" />
          </button>
          <img src={SiteLogo} alt="site logo" />
          <ul>
            <li>
                <Link to='/Xizmatlar'>Xizmatlar</Link>
            </li>
            <li>
            <Link to='/Home'>Home</Link>
            </li>
            <li>
            <Link to='/Main'>Main</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
