import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  width: 100%;
  min-height: 100vh;

  background: #f5f8fa;
`;

export const Content = styled.div`
  width: 800px;
  margin: 0 auto;

  p {
    color: #8fa7b2;
    text-align: center;
    font-size: 18px;
    padding: 40px 0;
  }

  section {
    height: 500px;
    background: #fff;
    border-radius: 20px;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: 0;
      width: 120px;
      border-radius: 16px;
      outline: 0;
    }
  }
`;
