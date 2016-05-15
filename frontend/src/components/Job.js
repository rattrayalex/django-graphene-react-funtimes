import React from 'react';
import { presenter } from 'adrenaline';

const css = {
  job: {
    border: '1px solid gray',
    margin: '1rem',
    padding: '1rem',
  },
};

const fragments = {
  job: `
    fragment on JobNode {
      id
      title
      description
    }
  `,
};

const Job = ({ job: { title, description } }) => (
  <div style={css.job}>
    Job:
    <strong> {title}</strong>
    <p>{description}</p>
  </div>
);
Job.propTypes = {
  job: React.PropTypes.object.isRequired,
};

export default presenter({ fragments })(Job);
