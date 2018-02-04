import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { fetchData } from './actions';
import Header from './Header';
import Routes from './Routes';

class App extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <Router>
        <div>
          <header>
            <Header />
            {this.props.loading && <p>Loading...</p>}
          </header>
          <main>
            {this.props.gotData && <Routes /> }
          </main>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({
    gotData: !!state.data.pages,
    loading: state.loading
  }),
  { fetchData }
)(App);