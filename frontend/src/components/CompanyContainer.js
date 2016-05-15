import React from 'react';
import { container } from 'adrenaline';

import Company from './Company';


const variables = ({ id }) => ({
  id,
});

const query = `
  query ($id: ID!) {
    company(id: $id) {
      ${Company.getFragment('company')}
    }
  }
`;

const CompanyContainer = ({ company, mutate }) => (!company ? null :
  <Company company={company} mutate={mutate} />
);
CompanyContainer.propTypes = {
  id: React.PropTypes.string.isRequired,
  company: React.PropTypes.object,
  isFetching: React.PropTypes.bool,
  variables: React.PropTypes.object,
  mutate: React.PropTypes.func.isRequired,
};

export default container({ query, variables })(CompanyContainer);
