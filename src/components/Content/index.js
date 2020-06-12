import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '@brainhubeu/react-carousel';
import Card from '../Card'

import '@brainhubeu/react-carousel/lib/style.css';
import { Container, ContainerCards, ContainerLinkConfira, LinkConfira } from './styles';

import IconplanoP from '../../assets/icon-plan-p.svg'
import IconplanoM from '../../assets/icon-plan-m.svg'
import IconplanoTurbo from '../../assets/icon-plan-turbo.svg'
import ArrowLeft from '../../assets/icon-arrow-left.svg'
import ArrowRight from '../../assets/icon-arrow-right.svg'

const Content = () => {

  const [plans, setPlans] = useState([])
  const [period, setPeriod] = useState('triennially')


  //Carrega os dados e monta o array.
  useEffect(() => {
    axios.get('https://7ac2b8ab-f3e5-4534-863d-90dd424a6405.mock.pstmn.io/prices')
      .then(response => {
        const plansSerialized = []
        const plans = response.data.shared.products
        for(const plan in plans) {
          if(plan === 'planoP') {
            plans[plan]['icon'] = `${IconplanoP}`;
          } else if(plan === 'planoM') {
            plans[plan]['icon'] = `${IconplanoM}`;
          } else {
            plans[plan]['icon'] = `${IconplanoTurbo}`;
          }
          plansSerialized.push(plans[plan])
        }
        setPlans(plansSerialized)
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  //Lida com o evento da troca de periodo
  function handlePeriodChange(event) {
    setPeriod(event.target.value);
  }

  return (
    <Container>
      <h4>Quero pagar a cada:</h4>
      <div className="containerSelect">
        <label onChange={handlePeriodChange}>
          <input type="radio" name="plansTime" value="triennially" defaultChecked />
          <span className="design"></span>
          <span className="text">3 anos</span>
          <div className="bg"></div>
        </label>
        <label onChange={handlePeriodChange}>
          <input type="radio" name="plansTime" value="annually" />
          <span className="design"></span>
          <span className="text">1 ano</span>
          <div className="bg"></div>
        </label>
        <label onChange={handlePeriodChange}>
          <input type="radio" name="plansTime" value="quarterly" />
          <span className="design"></span>
          <span className="text">3 meses</span>
          <div className="bg"></div>
        </label>
      </div>
      <ContainerCards>
      <Carousel
        slidesPerPage={3}
        draggable={false}
        offset={20}
        breakpoints={{
          340: {
            slidesPerPage: 1,
            slidesPerScroll: 1,
            arrows: true,
            arrowLeft: <img src={ArrowLeft} alt="ArrowLeft"/>,
            arrowRight: <img src={ArrowRight} alt="ArrowRight"/>,
            centered: false,
            addArrowClickHandler: true,
            draggable: true,
            itemWidth: 250,
            offset: 0
          },
          425: {
            slidesPerPage: 1,
            slidesPerScroll: 1,
            arrows: true,
            arrowLeft: <img src={ArrowLeft} alt="ArrowLeft"/>,
            arrowRight: <img src={ArrowRight} alt="ArrowRight"/>,
            centered: true,
            addArrowClickHandler: true,
            draggable: true,
          },
          1024: {
            slidesPerPage: 2,
            slidesPerScroll: 2,
            arrows: true,
            arrowLeft: <img src={ArrowLeft} alt="ArrowLeft"/>,
            arrowRight: <img src={ArrowRight} alt="ArrowRight"/>,
            centered: false,
            addArrowClickHandler: true,
            draggable: true,
            offset: 0,
            itemWidth: 350
          },          
        }}
      >
        {
          plans.map(plan => (
            <Card key={plan.id} data={plan} period={period} />
          ))
        }
        </Carousel>
      </ContainerCards>
      <ContainerLinkConfira>
        <LinkConfira href="#">*Confira as condições da promoção</LinkConfira>
      </ContainerLinkConfira>
    </Container>
  );
}

export default Content;