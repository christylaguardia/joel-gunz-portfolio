import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { pagesRef } from '../services/firebase';
import { fetchData } from './actions';
import Header from './Header';
import Menu from '../menu/Menu';
import Login from '../auth/Login';
import Page from '../page/Page';


class App extends Component {

  componentDidMount() {
    pagesRef.on('value', snapshot => this.props.fetchData(snapshot.val()));
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.loading
            ? <p>Loading...</p>
            : (
              <div>
                <Header />
                <Route exact path="/" component={Menu} />
                <Route path="/login" component={Login} />
                <Route path="/p/:name" component={Page} />
              </div>)
          }
        </div>
      </Router>
    );
  }
}

export default connect(
  ({ loading }) => ({ loading }),
  { fetchData }
)(App);