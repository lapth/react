import React, { Component } from 'react';
import './../css/index.css';
import './../css/App.css';

import Dieuhuong from '../router/Dieuhuong';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
            <Dieuhuong />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
