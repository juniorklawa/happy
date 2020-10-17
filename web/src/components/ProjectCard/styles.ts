import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px;

  background: #f5f8fa;
  border-radius: 20px;
  padding: 16px;

  cursor: pointer;

  transition: all 0.1s;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 32px;
  }

  .infos {
    flex: 1;
    max-height: 130px;
    padding: 8px 0;

    color: #5c8599;
  }

  .infos p {
    text-align: left;
    padding: 0;
  }

  svg {
    margin: 0 16px 0 32px;
    color: #5c8599;
  }

  &:hover {
    transform: translateX(16px);
  }
`;
