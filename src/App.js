import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Components/TopMenu/TopMenu.js'
import Header from './Components/Header/Header.js'
import Content from './Components/Content/Content.js'
import Footer from './Components/Footer/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="_013">
        <TopMenu/>
        <Header/>
        <div className="container">
          <div class="row pt-5">
            <Content tieude="Content 1" vitri1="order-lg-2" vitri2="order-lg-1" anh="/img/01.jpg" trichdan="Trich dan 1"/>
            <Content tieude="Content 2" anh="/img/02.jpg" trichdan="Trich dan 2"/>
            <Content tieude="Content 3" vitri1="order-lg-2" vitri2="order-lg-1" anh="/img/03.jpg" trichdan="Trich dan 3"/>

            <Content tieude="Content 1" vitri1="order-lg-2" vitri2="order-lg-1" anh="/img/01.jpg" trichdan="Trich dan 1"/>
            <Content tieude="Content 2" anh="/img/02.jpg" trichdan="Trich dan 2"/>
            <Content tieude="Content 3" vitri1="order-lg-2" vitri2="order-lg-1" anh="/img/03.jpg" trichdan="Trich dan 3"/>

            <Content tieude="Content 1" vitri1="order-lg-2" vitri2="order-lg-1" anh="/img/01.jpg" trichdan="Trich dan 1"/>
            <Content tieude="Content 2" anh="/img/02.jpg" trichdan="Trich dan 2"/>
            <Content tieude="Content 3" vitri1="order-lg-2" vitri2="order-lg-1" anh="/img/03.jpg" trichdan="Trich dan 3"/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
