import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  background: #f5f8fa;
  color: #4d6f80;
`;

export const Content = styled.div`
  p {
    color: #8fa7b2;
    text-align: center;
    font-size: 18px;
    padding: 40px 0;
  }

  section {
    width: 800px;
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
  }
`;
