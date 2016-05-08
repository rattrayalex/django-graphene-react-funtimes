import React from 'react';
import { presenter } from 'adrenaline';

import Jobs from './Jobs';


@presenter({
  fragments: {
    company: `
      fragment on CompanyNode {
        id
        name
        jobs {
          ${Jobs.getFragment('jobs')}
        }
      }
    `,
  }
})
export default class Company extends React.Component {
  static propTypes = {
    company: React.PropTypes.object.isRequired,
  }

  render() {
    const { company: { name, jobs } } = this.props;
    const style = {
      border: '1px solid gray',
      margin: '1rem',
      padding: '1rem',
    };

    return (
      <div style={style} >
        Company:
        <strong> {name}</strong>
        <Jobs jobs={jobs} />
      </div>
    );
  }
}
