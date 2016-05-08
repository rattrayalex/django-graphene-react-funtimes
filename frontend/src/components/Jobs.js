import React from 'react';
import { presenter } from 'adrenaline';

import Job from './Job';


@presenter({
  fragments: {
    jobs: `
      fragment on JobNodeDefaultConnection {
        edges {
          job: node {
            ${Job.getFragment('job')}
          }
        }
      }
    `
  }
})
export default class Jobs extends React.Component {
  render() {
    return (
      <div>
        Jobs:
        {this.props.jobs.edges.map(({ job }) =>
          <Job job={job} key={job.id} />
        )}
      </div>
    )
  }
}
