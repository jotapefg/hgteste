import styled from 'styled-components';

export const CardContainer = styled.div`

  max-width: 329px;
  width: 100%;

  .cardTop.Plano.M {
    background: #FF6A17 0% 0% no-repeat padding-box;
    border: 1px solid #DFECFF;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 15px;
  }

  .cardBottom.Plano.M {
    background: #FF6A17 0% 0% no-repeat padding-box;
    border: 1px solid #DFECFF;
    border-radius: 0 0 4px 4px;
    width: 100%;
    height: 6px;
    margin-top: -2px;
  }

  .cardBlock {
    max-width: 331px;
    width: 100%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #DFECFF;
    border-radius: 4px;
    margin-top: -2px;
    text-align: center;
    font-size: 0.8125rem; 
    padding-bottom: 20px;

    img {
      display: block;
      margin: 35px auto 0px;
    }

    h3 {
      text-align: center;
      font-size: 1.625rem;
      font-weight: 700;
      letter-spacing: 0px;
      margin-top: 10px;
    }

    .containerPrices {
      
      span {
        text-decoration: line-through;
      }
    }

    .discount {
      font-size: 1.25rem;
      color: #1D5297;

      b {
        font-size: 2.1875rem;
      }
    }

    .domain {
      letter-spacing: 0px;
      color: #333333;
      font-weight: bold;
      font-size: 0.9375rem;

      img {
        display: inline-block;
        margin: 0px;
      }
    }

    .offBox {
      margin: 6px 0px 0px;

      p {
        letter-spacing: 0px;
        color: #1D5297;
        font-size: .875rem;
      }
      span {
        background: #51C99C 0% 0% no-repeat padding-box;
        border-radius: 224px;
        letter-spacing: 0px;
        color: #FFFFFF;
        text-transform: uppercase;
        font-size: .875rem;
        font-weight: 700;
        padding: 2px 10px;
      }
    }

    .containerRules {
      text-align: left;
      padding-left: 26px;

      p {
        font-size: 1rem;
        color: #333333;
        letter-spacing: 0;
        margin: 10px 0px;
      }

      .underlineDashed {
        span {
          padding-bottom: 3px;
          border-bottom: 1px dashed #333333;
        }
      }
    }
  }

  @media (max-width: 340px) {
    
    .cardBlock {
      .offBox {
        
        span {
          padding: 2px 2px;
        }
      }

      .containerRules {
        padding-left: 16px;
      }
    }
  }
`;

export const BtnContrate = styled.a`
  background: ${props => props.secondary ? '#FF6A17 0% 0% no-repeat padding-box' : '#4480C5 0% 0% no-repeat padding-box'};
  border-radius: 26px;
  text-align: center;
  letter-spacing: 0px;
  color: #FFFFFF;
  font-weight: 700;
  font-size: 1.375rem;
  text-decoration: none;
  padding: 12px 50px;
  display: inline-block;
  margin: 20px 0px;

  @media (max-width: 340px) {
    font-size: 0.875rem;
  }
`;


export const Divider = styled.hr `
  border-top: 1px solid #F1F6FB;
  margin: 20px 0px;
`;