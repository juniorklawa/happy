import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Project from '../models/Project';

export default {
  async index(request: Request, response: Response) {
    const projectsRepository = getRepository(Project);

    const projects = await projectsRepository.find();

    return response.json(projects)
  },

  async show(request: Request, response: Response) {
    const { id  } = request.params;

    const projectsRepository = getRepository(Project);

    const project = await projectsRepository.findOneOrFail(id);

    return response.json(project)
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
      open_on_weekends
    } = request.body;

    const projectsRepository = getRepository(Project);

    const project = projectsRepository.create({
      name,
      category,
      longitude,
      latitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    })

    await projectsRepository.save(project);

    response.status(201).json(project);
  }
}
