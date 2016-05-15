import React from 'react';
import { presenter } from 'adrenaline';

import Job from './Job';


const fragments = {
  jobs: `
    fragment on JobNodeDefaultConnection {
      edges {
        job: node {
          ${Job.getFragment('job')}
        }
      }
    }
  `,
};

const Jobs = ({ jobs }) => (
  <div>
    Jobs:
    {jobs.edges.map(({ job }) =>
      <Job job={job} key={job.id} />
    )}
  </div>
);

export default presenter({ fragments })(Jobs);
