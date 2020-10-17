import React, { useEffect, useState } from 'react';
import { Form } from '@unform/web';

import { Link } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';

import api from '../../services/api';

import { Container, Content } from './styles';
import ProjectCard from '../../components/ProjectCard';

interface Projects {
  id: number;
  name: string;
  category: string;
  about: string;
  images: Array<{
    id: number;
    url: string;
  }>;
}

const ProjectsList: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  // const [category, setCategory] = useState('');

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  // function handleSubmit(): void {
  //   api
  //     .get(`/projects`, {
  //       params: {
  //         category,
  //       },
  //     })
  //     .then(response => {
  //       setProjects(response.data);
  //     });
  // }

  return (
    <Container>
      <Sidebar />

      <Content>
        <p>Lista de projetos</p>

        <section>
          {/* <Form onSubmit={handleSubmit}>
            <div className="input-block">
              <span>Categoria</span>
              <select
                value={category}
                onChange={event => setCategory(event.target.value)}
              >
                <option
                  value=""
                  disabled
                  defaultValue="Selecione uma opção"
                  hidden
                >
                  Selecione uma opção
                </option>
                <option value="asilos">Asilos</option>
                <option value="ambientalismo">Ambientalismo</option>
                <option value="assistencia">
                  Assistência e Serviços Sociais
                </option>
                <option value="educacao">Educação</option>
                <option value="orfanato">Orfanato</option>
                <option value="saude">Saúde</option>
              </select>
            </div>

            <button type="submit">Buscar</button>
          </Form> */}

          {projects.map(project => {
            return (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <ProjectCard
                  title={project.name}
                  description={project.about}
                  image={project.images[0].url}
                />
              </Link>
            );
          })}
        </section>
      </Content>
    </Container>
  );
};

export default ProjectsList;
