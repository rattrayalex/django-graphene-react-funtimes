import React from 'react';
import CompanyContainer from './CompanyContainer';
import Companies from './Companies';


const BaseLayout = ({ children }) => (
  <div>
    <div>Hi!!</div>
    <CompanyContainer id="Q29tcGFueU5vZGU6MQ==" />
    <hr />

    <Companies />

    <hr />
    <div>
      {children}
    </div>
  </div>
);
export default BaseLayout;
