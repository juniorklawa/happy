import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import ProjectsMap from '../pages/ProjectsMap';
import ProjectsList from '../pages/ProjectsList';
import About from '../pages/About';
import Project from '../pages/Project';
import CreateProject from '../pages/CreateProject';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/about" component={About} />

        <Route path="/map" component={ProjectsMap} />
        <Route path="/list" component={ProjectsList} />

        <Route path="/projects/create" component={CreateProject} />
        <Route path="/projects/:id" component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
