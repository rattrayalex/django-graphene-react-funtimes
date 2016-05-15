import React from 'react';
import { presenter } from 'adrenaline';

import Jobs from './Jobs';


const css = {
  company: {
    border: '1px solid gray',
    margin: '1rem',
    padding: '1rem',
  },
};

const fragments = {
  company: `
    fragment on CompanyNode {
      id
      name
      jobs {
        ${Jobs.getFragment('jobs')}
      }
    }
  `,
};

function handleClick(mutate, { company }) {
  mutate({
    variables: {
      title: 'A super swell job',
      description: 'Itll be good I promise',
      companyId: company.id,
    },
    mutation: `
      mutation ($title: String, $description: String, $companyId: String) {
        createJob(
          title: $title,
          description: $description,
          companyId: $companyId
        ) {
          ok
        }
      }
    `,
  });
}

const Company = ({ company, mutate }) => (
  <div style={css.company} >
    Company:
    <strong> {company.name}</strong>

    <div>
      <button onClick={handleClick.bind(null, mutate, { company })} type="button">
        Add Job
      </button>
    </div>

    <Jobs jobs={company.jobs} />
  </div>
);
Company.propTypes = {
  company: React.PropTypes.object.isRequired,
  mutate: React.PropTypes.func.isRequired,
};

export default presenter({ fragments })(Company);
