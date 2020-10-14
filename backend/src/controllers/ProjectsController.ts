/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import projectView from '../views/projects_view';

import Project from '../models/Project';

export default {
  async index(request: Request, response: Response) {
    const projectsRepository = getRepository(Project);

    const projects = await projectsRepository.find({
      relations: ['images'],
    });

    return response.json(projectView.renderMany(projects));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const projectsRepository = getRepository(Project);

    const project = await projectsRepository.findOneOrFail(id, {
      relations: ['images'],
    });

    return response.json(projectView.render(project));
  },

  async create(request: Request, response: Response) {
    const {
      name,
      category,
      longitude,
      latitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = request.body;

    const projectsRepository = getRepository(Project);

    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map(image => {
      return { path: image.filename };
    });

    const project = projectsRepository.create({
      name,
      category,
      longitude,
      latitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
      images,
    });

    await projectsRepository.save(project);

    response.status(201).json(project);
  },
};
