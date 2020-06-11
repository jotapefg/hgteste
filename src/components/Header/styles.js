import styled from 'styled-components';

export const ContainerLogo = styled.div`
  width: 100%;
  max-width: 1280px;
  display: flex;
  margin: 0 auto;

  img {
    padding: 8px 0px;
  }

  @media (max-width: 1024px) {
    img {
      padding: 8px 0px 8px 27px;
    }
  }

  @media (max-width: 425px) {
    img {
      padding: 8px 0px 8px 15px;
    }
  }
`;

export const ContainerBanner = styled.div`
  width: 100%;
  height: 300px;
  background: #1D5297;
  display: flex;
  position: relative;
  align-items: center;

  .left,
  .right {
    margin-top: 110px;
    position: relative;
  }

  .left {
    margin-left: 68px;
  }

  .right {
    margin-right: 100px;
  }

  .icon-arrow {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }

  h1 {
    font-size: 1.875rem;
    font-weight: 700;
    letter-spacing: 0px;
    color: #FFFFFF;
    text-align: center;
    margin: 8px 0px 30px;
  }

  h2 {
    color: #B9D0EF;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 1.6px;
  }

  .center {
    padding: 0px 50px;
    text-align: center;
    color: #B9D0EF;

    div {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      width: 67%;
      margin: 0 auto;

      .break {
        flex: 1 1 100%;
        margin-bottom: 15px;
      }
    }
  }

  @media (max-width: 1024px) {
    .left,
    .right {
      display: none;
    }

    .icon-arrow {
      bottom: -52px;
    }

    .center {
      padding: 0px 175px;

      div {
        width: 73%;
      }
    }
  }

  @media (max-width: 425px) {

    h1 {
      font-size: 1.5rem;
      padding: 0px 6px 0px;
      margin: 8px 0px 12px;
    }

    .center {
      padding: 10px 0px 0px;

      div {
        width: 89%;

        p, .break {
          margin-bottom: 5px;
        }
      }
    }
  }
`;

export const Wave = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;
  position: absolute;
  bottom: -130px;
  left: 0px;
  z-index: -1;
  
  svg {
    width: 100%;
    height: 100%;

    path {
      stroke: none;
      fill: #1D5297;
    }
  }

  @media (max-width: 1024px) {
    bottom: -105px;

    svg {
      width: 180%;
    }
  }

  @media (max-width: 425px) {
    bottom: -87px;

    svg {
      width: 550%;
    }
  }
`; 