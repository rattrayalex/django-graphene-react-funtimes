import React from 'react';
import { container } from 'adrenaline';

import Company from './Company';


const Companies = (props) => (!props.companies ? null :
  <div>
    <h3>Companies Props:</h3>
    <code>{JSON.stringify(props)}</code>

    <h3>Companies:</h3>
    {props.companies.edges.map(({ company }) =>
      <Company company={company} key={company.id} />
    )}
  </div>
);
Companies.propTypes = {
  companies: React.PropTypes.object,
};

export default container({
  query: `
    query {
      companies: allCompanies {
        edges {
          company: node {
            ${Company.getFragment('company')}
          }
        }
      }
    }
  `,
})(Companies);
