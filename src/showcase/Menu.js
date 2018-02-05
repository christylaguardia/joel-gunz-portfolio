import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import './Menu.css';

const InstagramTile = ({ page, data }) => (
  <a className="tile"
    href={data.url}
    target="_blank" >
    <img src={data.image_url}
      alt="Instagram"
      height="180px"
      width="180px" />
  </a>
);
  
const FeedTile = ({ page, data }) => (
  <a className="tile"
    href={data.url}
    target="_blank" >
    <p>{page.feed}</p>
    <p>{data.content}</p>
    <p>{data.date}</p>
  </a>
);

const LinkTile = ({ page }) => (
  <Link className="tile"
    to={`/${page.category}/${page.path}`}>
    <p>{page.title}</p>
  </Link>
);

class Menu extends React.PureComponent {

  render() {
    const { pages, feeds, filter } = this.props;
    console.log('pages', pages);
    console.log('feeds', feeds);
    
    if (!pages) return <Redirect to="/" />;

    if (filter) pages.filter(p => p.category === filter);


    // const keys = Object.keys(pages);
    
    // let visiblePages = keys.map(k => pages[k].feed ? feeds[k] : pages[k]);
      // let page = pages[k];
      // page.pathname = k;
      // return page;
      // convert data to arrays
  //     let pages = [];
  //     let categories = [];

  //     keys.forEach(k => {
  //       let page = rawData[k];
  //       // use key for the route path
  //       page.pathname = k;
  //       pages.push(page);
  //       // get unique categories
  //       if (categories.indexOf(page.category) === -1) categories.push(page.category);
  //     });
    // });

    

    return (
      <section className="container">
        {pages.map((page, i) => page.path
          ? <LinkTile key={i} page={page} />
          : page.feed === 'instagram'
            ? <InstagramTile key={i} page={page} data={feeds[page.feed]}/>
            : <FeedTile key={i} page={page} data={feeds[page.feed]}/>
        )}
      </section>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    pages: state.data.pages,
    feeds: state.data.feeds,
    filter: ownProps.match.params.filter
  }),
  null
)(Menu);