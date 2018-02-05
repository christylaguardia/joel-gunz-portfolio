import React from 'react';
import { connect } from 'react-redux';

class Page extends React.PureComponent {

  render() {
    const { title, content } = this.props.page;

    return (
      <div>
        <h1>{title}</h1>
        <div>{content}</div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({ page: state.data.pages.filter(p => p.path === ownProps.match.params.page)[0] }),
  null
)(Page);