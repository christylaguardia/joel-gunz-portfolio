import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { fetchPages } from './actions';
import Header from './Header';
import Menu from '../menu/Menu';
import Login from '../auth/Login';
import { getPages } from '../services/firebase';
class App extends Component {

  componentDidMount() {
    getPages();
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
                {/* <Route exact path="/" render={() => <Menu projects={this.props.pages} />} /> */}
                <Route exact path="/" render={() => <div>{this.props.pages} </div>} />
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
  null //{ fetchPages }
)(App);