import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 64px 0;

  background: #cedee5;
  color: #4d6f80;
`;

export const Content = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 64px;
  border-radius: 20px;

  background: #fff;

  color: #4d6f80;

  h1 {
    margin-bottom: 64px;
    padding-bottom: 8px;
    border-bottom: 1px solid #d3e2e5;
  }

  p {
    margin: 24px 0;

    font-size: 18px;
    line-height: 28px;

    a {
      color: #5173a0;
    }
  }
`;
