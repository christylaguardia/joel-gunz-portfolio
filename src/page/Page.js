import React from 'react';
import { connect } from 'react-redux';

class Page extends React.Component {

  render() {
    const path = this.props.match.params.name;
    const current = this.props.pages[path];

    return (
      <div>
        <h1>{current.title}</h1>
        <div>{current.body}</div>
      </div>
    );
  }
}

export default connect(
  ({ pages }) => ({ pages }),
  null
)(Page);