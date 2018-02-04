import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Page from './Page';
import './Menu.css';

class Menu extends React.PureComponent {

  render() {
    const { pages, filter } = this.props;
    if (!pages) return <Redirect to="/" />;
    
    let visiblePages = pages;
    if (filter) visiblePages = visiblePages.filter(p => p.category === filter);

    return (
      <div className="container">
        {visiblePages.map(p => p.url
          ? <a key={p.sequence} className="tile" href={p.url} target="_blank">{p.title}</a>
          : <Link key={p.sequence} className="tile" to={`/${p.category}/${p.pathname}`}>{p.title}</Link>)}
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    pages: state.data.pages,
    filter: ownProps.match.params.filter
  }),
  null
)(Menu);