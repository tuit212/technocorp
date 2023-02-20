import React from 'react'
import "./Footer.scss";
import FooterBacground from '../../Assets/Img/Footer/background.png';
import FooterLogo from '../../Assets/Img/Footer/footer-logo.svg';




function Footer() {
  return (
    <footer className='footer' style={{ backgroundImage: `url(${FooterBacground})` }}>
      <div className='container'>
        <div className='footer__container'>
            <div className='footer__content'>
              <img src={FooterLogo} alt=""/>
              <p className='footer__content-title'>Biz haqimizda</p>
              <p className='footer__content-text'>
                biz iste'dodli talabalar va noyob startapni birlashtirishga yordam berishni xohlaymiz
              </p>
            </div>
        </div>
      </div>
      <span className='footer__line'></span>
      <div className='container'>
        <p className='footer__text'>©2023. Barcha hizmatlar litsenziyalangan</p>
      </div>
    </footer>
  )
}

export default Footer
