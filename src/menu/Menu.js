import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Menu extends React.Component {

  render() {
    const { pages } = this.props;
    console.log('pages in Menu', pages);
    const keys = Object.keys(pages);
    const pagesArray = keys.map(k => pages[k]);
    // pages.sort((a, b) => a.sequence > b.sequence);
    
    return (
      <div>
        {pagesArray.map(p => p.url
          ? <p key={p.sequence}><a href={p.url} target="_blank">{p.title}</a></p>
          : <p key={p.sequence}><Link to={`/${p.path}`}>{p.title}</Link></p>
        )}
      </div>
    );
  }
}

export default connect(
  ({ pages }) => ({ pages }),
  null
)(Menu);