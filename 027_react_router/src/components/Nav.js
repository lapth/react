import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/tintuc">Tin Tuc</Link>
                </li>                
                <li className="nav-item">
                  <Link to="/lienhe">Lien He</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container h-5">
            
              
            </div>          
        </header>
      </div>
    );
  }
}

export default Nav;