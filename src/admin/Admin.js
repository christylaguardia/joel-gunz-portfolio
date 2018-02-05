import React from 'react';
import { connect } from 'react-redux';

class Admin extends React.Component {
  render() {
    const { pages, categories } = this.props;

    return (
      <div>
        <h3>Categories</h3>
        <ul>
          {categories.map(c => <li>{c}</li>)}
        </ul>

        <h3>Tiles</h3>
        <ol>
          {pages.sort((a,b) => a.sequence > b.sequence).map(p => <li>{`${p.title}${p.url ? ' - (External Link)' : ''}`}</li>)}
        </ol>
        <button>New Page</button>

      </div>
    );
  }
}

export default connect(
  state => ({ pages: state.data.pages, categories: state.data.categories }),
  null
)(Admin);