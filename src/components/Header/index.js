import React from 'react';

import { ContainerLogo, ContainerBanner, Wave } from './styles';

import Logo from '../../assets/hostgator-logo.svg'
import ImgBannerLeft from '../../assets/banner-left.svg'
import ImgBannerRight from '../../assets/banner-right.svg'
import IconCheck from '../../assets/icon-check.svg'
import iconArrowDown from '../../assets/icon-arrow-down.svg'

const Header = () => {
  return (
    <header>
      <ContainerLogo>
        <img src={Logo} alt="HostGator"/>
      </ContainerLogo>
      <ContainerBanner>
        <div className="left">
          <img src={ImgBannerLeft} alt="left banner" />
        </div>
        <div className="center">
          <h2>Hospedagem de Sites</h2>
          <h1>Tenha uma hospedagem de sites estável e evite perder visitantes diariamente</h1>
          <div>
            <p className="break"><img src={IconCheck} alt="check"/> 99,9% de disponibilidade: seu site sempre no ar</p>
            <p><img src={IconCheck} alt="check"/> Suporte 24h, todos os dias</p>
            <p><img src={IconCheck} alt="check"/> Painel de Controle cPanel</p>
          </div>
        </div>
        <div className="right">
          <img src={ImgBannerRight} alt="right banner" />
        </div>
        <div className="icon-arrow">
          <img src={iconArrowDown} alt="down"/>
        </div>
        <Wave>
          <svg viewBox="0 0 500 150" preserveAspectRatio="none">
            <path d="M0.00,49.98 C-23.42,153.45 349.20,-49.98 501.97,103.13 L503.67,-3.45 L-2.54,-1.47 Z" />
          </svg>
        </Wave>
      </ContainerBanner>
    </header>
  )
}

export default Header;