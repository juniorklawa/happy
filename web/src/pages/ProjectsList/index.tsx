import React, { useState } from 'react';
import { Form } from '@unform/web';

import Sidebar from '../../components/Sidebar';

import { Container, Content } from './styles';

const ProjectsList: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Container>
      <Sidebar />

      <Content>
        <p>Lista de projetos</p>

        <section>
          <Form onSubmit={() => console.log('data')}>
            <button type="submit">Buscar</button>
          </Form>
        </section>
      </Content>
    </Container>
  );
};

export default ProjectsList;
