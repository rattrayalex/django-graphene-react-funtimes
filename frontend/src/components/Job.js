import React from 'react';
import { presenter } from 'adrenaline';


@presenter({
  fragments: {
    job: `
      fragment on JobNode {
        id
        title
        description
      }
    `,
  }
})
export default class Job extends React.Component {
  static propTypes = {
    job: React.PropTypes.object.isRequired,
  }

  render() {
    const { job: { title, description } } = this.props;
    const style = {
      border: '1px solid gray',
      margin: '1rem',
      padding: '1rem',
    };

    return (
      <div style={style} >
        Job:
        <strong> {title}</strong>
        <p>{description}</p>
      </div>
    );
  }
}
