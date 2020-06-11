import React from 'react';

import { Container, Divider, ContainerCards, Card, BtnContrate, ContainerLinkConfira, LinkConfira } from './styles';

import IconPlanP from '../../assets/icon-plan-p.svg'
import IconInfo from '../../assets/icon-info.svg'

const Content = () => {
  return (
    <Container>
      <h4>Quero pagar a cada:</h4>
      <div className="containerSelect">
        <label>
          <input type="radio" name="plan-3-years" defaultChecked />
          <span className="design"></span>
          <span className="text">3 anos</span>
          <div className="bg"></div>
        </label>
        <label>
          <input type="radio" name="plan-3-years" />
          <span className="design"></span>
          <span className="text">1 ano</span>
          <div className="bg"></div>
        </label><label>
          <input type="radio" name="plan-3-years" />
          <span className="design"></span>
          <span className="text">3 meses</span>
          <div className="bg"></div>
        </label>
      </div>
      <ContainerCards>
      <Card>
          <div className="cardTop"></div>
          <div className="cardBlock">
            <img src={IconPlanP} alt="Plano p" />
            <h3>Plano P</h3>
            <Divider />
            <div className="containerPrices">
              <span>R$ 431,64</span> <b>R$ 302,15</b>
            </div>
            <p>equivalente a</p>
            <p className="discount">R$ <b>8,39</b>/mês*</p>
            <BtnContrate href="#" >Contrate Agora</BtnContrate>
            <p className="domain">1 ano de Domínio Grátis <img src={IconInfo} alt="info" /></p>
            <div className="offBox">
              <p>economize R$ 174,48 <span>40% OFF</span></p>
            </div>
            <Divider />
            <div className="containerRules">
              <p className="underlineDashed"><span>Para 1 site</span></p>
              <p><b>100 GB</b> de Armazenamento</p>
              <p className="underlineDashed"><span>Contas de E-mail <b>Ilimitadas</b></span></p>
              <p>Criador de Sites <b><u>Grátis</u></b></p>
              <p>Certificado SSL <b>Grátis</b> (https)</p>
            </div>
          </div>
          <div className="cardBottom"></div>
        </Card>

        <Card>
          <div className="cardTop"></div>
          <div className="cardBlock">
            <img src={IconPlanP} alt="Plano p" />
            <h3>Plano P</h3>
            <Divider />
            <div className="containerPrices">
              <span>R$ 431,64</span> <b>R$ 302,15</b>
            </div>
            <p>equivalente a</p>
            <p className="discount">R$ <b>8,39</b>/mês*</p>
            <BtnContrate href="#" secondary>Contrate Agora</BtnContrate>
            <p className="domain">1 ano de Domínio Grátis <img src={IconInfo} alt="info" /></p>
            <div className="offBox">
              <p>economize R$ 174,48 <span>40% OFF</span></p>
            </div>
            <Divider />
            <div className="containerRules">
              <p className="underlineDashed"><span>Para 1 site</span></p>
              <p><b>100 GB</b> de Armazenamento</p>
              <p className="underlineDashed"><span>Contas de E-mail <b>Ilimitadas</b></span></p>
              <p>Criador de Sites <b><u>Grátis</u></b></p>
              <p>Certificado SSL <b>Grátis</b> (https)</p>
            </div>
          </div>
          <div className="cardBottom"></div>
        </Card>

        <Card>
          <div className="cardTop"></div>
          <div className="cardBlock">
            <img src={IconPlanP} alt="Plano p" />
            <h3>Plano P</h3>
            <Divider />
            <div className="containerPrices">
              <span>R$ 431,64</span> <b>R$ 302,15</b>
            </div>
            <p>equivalente a</p>
            <p className="discount">R$ <b>8,39</b>/mês*</p>
            <BtnContrate href="#" >Contrate Agora</BtnContrate>
            <p className="domain">1 ano de Domínio Grátis <img src={IconInfo} alt="info" /></p>
            <div className="offBox">
              <p>economize R$ 174,48 <span>40% OFF</span></p>
            </div>
            <Divider />
            <div className="containerRules">
              <p className="underlineDashed"><span>Para 1 site</span></p>
              <p><b>100 GB</b> de Armazenamento</p>
              <p className="underlineDashed"><span>Contas de E-mail <b>Ilimitadas</b></span></p>
              <p>Criador de Sites <b><u>Grátis</u></b></p>
              <p>Certificado SSL <b>Grátis</b> (https)</p>
            </div>
          </div>
          <div className="cardBottom"></div>
        </Card>
      </ContainerCards>
      <ContainerLinkConfira>
        <LinkConfira href="#">*Confira as condições da promoção</LinkConfira>
      </ContainerLinkConfira>
    </Container>
  );
}

export default Content;