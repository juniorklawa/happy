import styled from 'styled-components';

import background from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;

  background: url(${background}) no-repeat 100% center;
  background-size: 450px 450px;

  main {
    max-width: 500px;
  }

  main h1 {
    font-size: 76px;
    font-weight: 900;
    line-height: 70px;
  }

  main p {
    margin-top: 128px;
    font-size: 24px;
    line-height: 34px;
  }

  .about {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 32px;
    margin-right: 40px;

    font-size: 18px;
    line-height: 34px;

    text-align: right;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      text-decoration: none;
      color: #fff;

      svg {
        margin-left: 8px;
      }
    }
  }

  .enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 250px;
    height: 80px;
    background: #fff;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: rgba(0, 0, 0, 0.6);
    text-decoration: none;

    transition: all 0.2s;

    svg {
      color: rgba(0, 0, 0, 0.6);
      transition: color 0.2s;

      margin-left: 24px;
    }
  }

  @keyframes moveArrow {
    25% {
      transform: translateX(8px);
    }
    50% {
      transform: translateX(0px);
    }
    75% {
      transform: translateX(8px);
    }
    100% {
      transform: translateX(0px);
    }
  }

  .enter-app:hover {
    background: #3d5a80;
    color: white;

    svg {
      color: white;
      animation: moveArrow 0.5s;
    }
  }
`;
