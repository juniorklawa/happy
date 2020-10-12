import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  display: flex;

  aside {
    width: 440px;
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
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

  .create-project:hover {
    background: #5173a0;
  }
`;
