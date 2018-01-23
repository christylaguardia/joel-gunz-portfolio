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
    pagesRef.on('value', snapshot => {
      const rawData = snapshot.val();
      const keys = Object.keys(rawData);
      const pagesArray = keys.map(k => {
        let page = rawData[k];
        page.path = k;
        return page;
      });
      pagesArray.sort((a, b) => a.sequence > b.sequence);
      this.props.fetchData(pagesArray);
    });
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
                {this.props.pages.map(p => <Route path={`/${p.path}`} render={() => <Page page={p} />} /> )}
              </div>)
          }
        </div>
      </Router>
    );
  }
}

export default connect(
  ({ loading, pages }) => ({ loading, pages }),
  { fetchData }
)(App);