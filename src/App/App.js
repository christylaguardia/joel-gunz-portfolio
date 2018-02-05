import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { fetchData } from './actions';
import Header from './Header';
import Routes from './Routes';

class App extends Component {

  componentWillMount() {
    if (!this.props.dataLoaded.pages) this.props.fetchData();
  }

  render() {
    const { dataLoaded, loading } = this.props;

    return (
      <Router>
        <div>
          <header>
            <Header />
          </header>
          <main>
            {loading && <div className="loader"></div>}
            {dataLoaded && <Routes /> }
          </main>
          <footer>
            {!loading && <Link to="/login">Login</Link>}
          </footer>
        </div>
      </Router>
    );
  }
}

export default connect(    
  state => ({
    dataLoaded: !!state.data,
    loading: state.loading
  }),
  { fetchData }
)(App);