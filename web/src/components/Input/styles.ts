import styled from 'styled-components';

export const Container = styled.div``;

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
