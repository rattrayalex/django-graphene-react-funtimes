import React from 'react';
import { container } from 'adrenaline';

import Company from './Company';

const query = `
  query {
    companies: allCompanies {
      edges {
        company: node {
          ${Company.getFragment('company')}
        }
      }
    }
  }
`;

function handleClick(mutate) {
  mutate({
    mutation: `
      mutation ($name: String) {
        createCompany(name: $name) {
          ok
        }
      }
    `,
    variables: {
      name: 'Razzi forreal 5',
    },
  });
}

const Companies = ({ companies, mutate }) => (!companies ? null :
  <div>
    <h3>Companies:</h3>
    <button onClick={handleClick.bind(this, mutate)} type="button" >
      Add a Company
    </button>

    {companies.edges.map(({ company }) =>
      <Company company={company} mutate={mutate} key={company.id} />
    )}
  </div>
);
Companies.propTypes = {
  companies: React.PropTypes.object,
};

export default container({ query })(Companies);
