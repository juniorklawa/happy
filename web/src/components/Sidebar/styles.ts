import styled from 'styled-components';

export const Content = styled.div`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(#83c5be, #aed9e0);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 48px;
  }

  .back-button a,
  button {
    width: 48px;
    height: 48px;

    border: 0;
    outline: none;

    background: #3d5a80;
    border-radius: 16px;

    cursor: pointer;

    transition: background-color 0.2s;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 16px;
  }

  .back-button a:hover,
  button:hover {
    background: #5173a0;
  }

  .menu-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 24px;

    color: #fff;
    text-decoration: none;

    transition: color 0.2s;

    svg {
      margin-bottom: 4px;
      color: '#fff';
    }
  }

  .menu-item:hover {
    color: #3d5a80;
    transition: color 0.2s;

    svg {
      color: #3d5a80;
      transition: color 0.2s;
    }
  }
`;
