import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Container } from './styles';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Container>
      <img src={image} alt="a" />

      <div className="infos">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <FiChevronRight size={20} />
    </Container>
  );
};

export default ProjectCard;
