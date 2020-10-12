import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.svg';

import { Container, Content } from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="happy" />

        <main>
          <h1>Leve felicidade para quem mais precisa!</h1>
          <p>
            Faça parte de projetos comunitários e deixe mais pessoas felizes
            mundo a fora!
          </p>
        </main>

        <div className="location">
          <strong>Curitiba</strong>
          <span>Paraná</span>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} />
        </Link>
      </Content>
    </Container>
  );
};

export default Landing;
