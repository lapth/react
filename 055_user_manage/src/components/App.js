import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search/>
              <Tabledata/>
              <AddUser/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
