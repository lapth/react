import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import ButtonsSwap from './ButtonsSwap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiSua: false
    }
  }
  
  thayDoiTrangThai = () => {
    this.setState({
      trangThaiSua: !this.state.trangThaiSua
    })
  }

  render() {
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search/>
              <Tabledata/>
              <div className="col-3">
                <ButtonsSwap trangThaiSua={this.state.trangThaiSua} thayDoiTrangThai={() => this.thayDoiTrangThai()}/>
                <AddUser trangThaiSua={this.state.trangThaiSua} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
