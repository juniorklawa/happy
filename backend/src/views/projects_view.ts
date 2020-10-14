import Project from '../models/Project';
import imagesView from './images_view';

export default {
  render(project: Project) {
    return {
      id: project.id,
      name: project.name,
      category: project.category,
      latitude: project.latitude,
      longitude: project.longitude,
      about: project.about,
      instructions: project.instructions,
      opening_hours: project.opening_hours,
      open_on_weekends: project.opening_hours,
      images: imagesView.renderMany(project.images),
    };
  },

  renderMany(projects: Project[]) {
    return projects.map(project => this.render(project));
  },
};
