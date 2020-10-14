import React, { useState } from 'react';
import { Form } from '@unform/web';

import Select from '../../components/Select';

import { Container, Content } from './styles';

const ProjectsList: React.FC = () => {
  const [category, setCategory] = useState('');

  return (
    <Container>
      <Content>
        <p>Lista de projetos</p>

        <section>
          <Form onSubmit={() => console.log('data')}>
            <Select
              name="category"
              label="Categoria"
              value={category}
              onChange={e => {
                setCategory(e.target.value);
              }}
              options={[
                { value: 'Teste', label: 'Teste' },
                { value: 'Ueba', label: 'Ueba' },
              ]}
            />

            <button type="submit">Buscar</button>
          </Form>
        </section>
      </Content>
    </Container>
  );
};

export default ProjectsList;
