import React, { useState, useEffect } from 'react'

import { Divider, CardContainer, BtnContrate } from './styles';
import IconInfo from '../../assets/icon-info.svg'

const Card = ({ data, period }) => {

  const [discountValue, ] = useState(40)
  const [promoCode, ] = useState('PROMOHG40')
  const [discountCalculated, setDiscountCalculated] = useState(0)

  //Calcula o desconto no valor
  useEffect(() => {
    const number = Number(data.cycle[period].priceOrder)
    setDiscountCalculated(Number(number - ( number*discountValue/100 )).toFixed(2).replace('.', ','))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  //Calcula o desconto mensal
  function calculateDiscountMonth(price, months) {
    let discount = discountCalculated
    if(discount === 0) {
      return discount
    }
    discount = Number(discount.replace(',', '.'))
    return Number((discount/months)).toFixed(2).replace('.', ',')
  }

  //Calcula o desconto total
  function calculateDiscountTotal(price) {
    let discount = discountCalculated
    if(discount === 0) {
      return discount
    }
    discount = Number(discount.replace(',', '.'))
    return Number((price-discount)).toFixed(2).replace('.', ',')
  }


  return (
    <CardContainer key={data.id}>
      <div className={`cardTop ${data.name}`}></div>
      <div className="cardBlock">
        <img src={data.icon} alt={data.name} />
        <h3>{data.name}</h3>
        <Divider />
        <div className="containerPrices">
          <span>R$ {data.cycle[period].priceOrder.replace('.',',')}</span> <b>R$ {discountCalculated}</b>
        </div>
        <p>equivalente a</p>
        <p className="discount">R$ <b>{calculateDiscountMonth(data.cycle[period].priceOrder, data.cycle[period].months)}</b>/mês*</p>
        <BtnContrate 
          href={`?a=add&pid=${data.id}&billingcycle=${period}&promocode=${promoCode}`}
          secondary={data.name === 'Plano M'}
        >
          Contrate Agora
        </BtnContrate>
        <p className="domain">1 ano de Domínio Grátis <img src={IconInfo} alt="info" /></p>
        <div className="offBox">
          <p>economize R$ {calculateDiscountTotal(data.cycle[period].priceOrder)} <span>{discountValue}% OFF</span></p>
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
      <div className={`cardBottom ${data.name}`}></div>
    </CardContainer>
  )
}

export default Card;