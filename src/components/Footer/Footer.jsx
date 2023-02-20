import React from 'react'
import "./Footer.scss";
import FooterBacground from '../../Assets/Img/Footer/background.png';
import FooterLogo from '../../Assets/Img/Footer/footer-logo.svg';



function Footer() {
  return (
    <footer className='footer' style={{ backgroundImage: `url(${FooterBacground})` }}>
      <div className='container'>
        <div className='footer__container'>
            <img src={FooterLogo} alt=""/>
        </div>
      </div>
      <span className='footer__line'></span>
      <div className='container'>
        <p className='footer__text'>©2023. Barcha hizmatlar litsenziyalangan</p>
        </div>
        <h1>salom</h1>
    </footer>
  )
}

export default Footer
