import React from 'react';

import logo from '../../images/logo.svg';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="" />
    </Container>
  );
};

export default Dashboard;
