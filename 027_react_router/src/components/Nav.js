import React, { Component } from 'react';
import {
  Link,
  NavLink
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
                  <NavLink to="/tintuc">Tin Tuc</NavLink>
                </li>                
                <li className="nav-item">
                  <NavLink to="/lienhe">Lien He</NavLink>
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