import React from 'react';
import { container } from 'adrenaline';

import Company from './Company';


@container({
  variables: ({ id }) => ({
    id,
  }),
  query: `
    query ($id: ID!) {
      company(id: $id) {
        ${Company.getFragment('company')}
      }
    }
  `,
})
export default class CompanyContainer extends React.Component {
  static propTypes = {
    id: React.PropTypes.string.isRequired,
    company: React.PropTypes.object,
    isFetching: React.PropTypes.bool,
    variables: React.PropTypes.object,
  }

  render() {
    const { props } = this;
    return (
      <div>
        {!props.company ? null :
          <Company company={props.company} />
        }
        <code><pre>{JSON.stringify(props)}</pre></code>
      </div>
    );
  }
}
