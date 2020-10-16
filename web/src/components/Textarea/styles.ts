import styled from 'styled-components';

export const Container = styled.div`
  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;

    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }
`;

export const Error = styled.div`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
      visibility: visible;
    }
  }
`;
