import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
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
            {loading && <p>Loading...</p>}
          </header>
          <main>
            {dataLoaded && <Routes /> }
          </main>
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