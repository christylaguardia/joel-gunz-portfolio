import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { setFirebaseRef, listenToConfigChanges } from './actions';
import Header from './Header';
import Menu from '../menu/Menu';
import Login from '../auth/Login';


class App extends Component {

  componentDidMount() {
    this.props.setFirebaseRef();
    this.props.listenToConfigChanges();
    // pagesRef.on('value', (snapshot) => {
    //   this.props.firebaseConfig(snapshot.val());
    // });

    // pagesRef.on('value', (snapshot) => {
    //   const rawData = snapshot.val();
    //   let pages = [], categories = [];

    //   Object.keys(rawData).forEach(p => {
    //     // create array of pages
    //     rawData[p].path = `/${p}`;
    //     pages.push(rawData[p]);
        
    //     // get unique categories
    //     if (categories.indexOf(rawData[p].category) < 0) categories.push(rawData[p].category);
    //   });

    //   this.setState({ loading: false });

    //   this.props.fetchPages(pages);
      // TODO;
      // this.props.fetchCategories(categories);
      
    // });

    // this.props.fetchPages();
    // this.props.firebaseConfig();
 
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.loading && <p>loading...</p>}
          <div>
            <Header />
            <Route exact path="/" component={Menu} />
            <Route path="/login" component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default connect(
  ({ loading }) => ({ loading }),
  { setFirebaseRef, listenToConfigChanges }
)(App);