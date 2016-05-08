import React from 'react';
import { Route } from 'react-router';

import BaseLayout from './components/BaseLayout';
import CompaniesPage from './components/CompaniesPage';
import JobsPage from './components/JobsPage';


export default (
  <Route path="/" component={BaseLayout}>
    <Route path="companies" component={CompaniesPage}/>
    <Route path="jobs" component={JobsPage}/>
  </Route>
);
