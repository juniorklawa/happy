import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  label {
    font-size: 16px;
    color: #8fa7b2;
  }

  select {
    width: 100%;
    height: 3rem;
    margin-top: 8px;
    border-radius: 0.8rem;
    background: #f5f8fa;
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
  }

  &:focus-within::after {
    position: absolute;
    width: calc(100% - 3.2rem);
    height: 2px;

    /* background: var(--color-primary-light); */
    left: 1.6rem;
    right: 1.6rem;
    bottom: 0;

    content: '';
  }
`;
