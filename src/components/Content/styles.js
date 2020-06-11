import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 110px auto 0px;
  flex-direction: column;
  align-items: center;

  h4 {
    font-weight: 400;
    letter-spacing: 0px;
    color: #1D5297;
    font-size: .875rem;
    text-align: center;
  }

  .containerSelect {
    width: 324px;
    height: 41px;
    box-shadow: 0px 2px 4px #4480C570;
    border: 1px solid #4480C5;
    border-radius: 21px;
    display: flex;
    justify-content: space-between;
    margin: 8px 0;

    label {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: nowrap;
      cursor: pointer;
      position: relative;
      border-radius: 21px;

      input {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;

        &:checked {
          background: #4480C5 0% 0% no-repeat padding-box;
          border-radius: 21px;
        }

        &:checked+.design {
          border: 2px solid #fff;
        }

        &:checked+.design::before {
          opacity: 1;
          transform: scale(.4);
        }

        &:checked~.bg {
          opacity: 1;
          transition: .3s;
        }

        &:checked~.text {
          font-weight: 700;
          color: #fff;
        }
      }

      .design {
        width: 16px;
        height: 16px;
        border: 1px solid #B9D0EF;
        border-radius: 100%;
        margin: 0px 3px 0px 7px;
        position: relative;

        &:before {
          content: "";
          display: block;
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          transform: scale(0);
          transform-origin: center center;
          background: #fff;
          opacity: 0;
          transition: .3s;
          margin: -2px 0px 0px -2px;
        }
      }

      .text {
        font-size: 1rem;
        letter-spacing: 0px;
        color: #16437E;
        font-weight: 500;
        padding: 0px 9px 0px 2px;
      }

      .bg {
        width: 100%;
        height: 100%;
        background: #4480C5 0% 0% no-repeat padding-box;
        border-radius: 21px;
        position: absolute;
        z-index: -1;
        opacity: 0;
      }
    }
  }
`;

export const Divider = styled.hr `
  border-top: 1px solid #F1F6FB;
  margin: 20px 0px;
`;

export const ContainerCards = styled.div`
  width: 100%;
  max-width: 1016px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 43px;
`;

export const Card = styled.div`

  .cardTop {
    background: #FF6A17 0% 0% no-repeat padding-box;
    border: 1px solid #DFECFF;
    border-radius: 4px 4px 0 0;
    width: 100%;
    height: 15px;
  }

  .cardBottom {
    background: #FF6A17 0% 0% no-repeat padding-box;
    border: 1px solid #DFECFF;
    border-radius: 0 0 4px 4px;
    width: 100%;
    height: 6px;
    margin-top: -2px;
  }

  .cardBlock {
    width: 331px;
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
`;

export const ContainerLinkConfira = styled.div`
  width: 100%;
  max-width: 1016px;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {

    justify-content: center;
  }
`;

export const LinkConfira = styled.a`
  text-decoration: underline;
  letter-spacing: 0px;
  color: #4480C5;
  opacity: 0.7;
  font-size: .75rem;
  margin: 20px 0px 30px;
`;