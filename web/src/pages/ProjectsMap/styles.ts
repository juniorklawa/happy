import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;

  aside {
    width: 420px;
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 48px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    .enter-projects-list {
      width: 280px;
      height: 64px;
      background: #fff;
      border-radius: 20px;

      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 64px;

      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;

      transition: all 0.2s;
    }

    .enter-projects-list:hover {
      background: #3d5a80;
      color: white;
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 24px;

      strong {
        font-weight: 800;
      }
    }
  }

  .leaflet-container {
    z-index: 5;
  }

  .create-project {
    position: absolute;
    right: 40px;
    bottom: 40px;

    z-index: 10;

    width: 64px;
    height: 64px;
    background: #3d5a80;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  @keyframes movePlus {
    to {
    }
    100% {
      transform: rotate(90deg);
    }
  }

  .create-project:hover {
    background: #5173a0;

    svg {
      animation: movePlus 0.2s;
    }
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
    box-shadow: none;
  }

  .map-popup .leaflet-popup-content {
    color: #5173a0;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #5173a0;
    box-shadow: 17.2868px 27.6589px 41.4884 rgba(23, 142, 1666, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
