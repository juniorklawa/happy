import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import ProjectsMap from '../pages/ProjectsMap';
import ProjectsList from '../pages/ProjectsList';
import About from '../pages/About';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={ProjectsMap} />
        <Route path="/list" component={ProjectsList} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
