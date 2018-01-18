import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fetchPages } from './actions';
import Header from './Header';
import Menu from '../menu/Menu';
import Login from '../auth/Login';

class App extends Component {

  componentDidMount() {
    this.props.fetchPages();
  }

  render() {
    return (
      <Router>
        <div>
          {this.props.loading
            ? <p>loading...</p>
            : (
              <div>
                <Header />
                <Route exact path="/" component={Menu} />
                <Route path="/login" component={Login} />
              </div>
            )
          }
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ loading: state.loading }),
  { fetchPages }
)(App);