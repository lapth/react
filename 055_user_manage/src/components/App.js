import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import ButtonsSwap from './ButtonsSwap';
import fileDuLieu from './data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiSua: false,
      data: fileDuLieu,
      tmpData:fileDuLieu.slice(0)
    }
  }

  thayDoiTrangThai = () => {
    this.setState({
      trangThaiSua: !this.state.trangThaiSua
    })
  }

  returnGiaTriTim = (giaTriCanTim) => {
    var filteredArr = [];
    this.state.data.forEach(element => {
      if (element.hoTen.indexOf(giaTriCanTim) !== -1) {
        filteredArr.push(element);
      }
    });
    this.setState({tmpData: filteredArr});
  }

  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search returnGiaTriTim={this.returnGiaTriTim} />
              <Tabledata data={this.state.tmpData} />
              <div className="col-3">
                <ButtonsSwap trangThaiSua={this.state.trangThaiSua} thayDoiTrangThai={() => this.thayDoiTrangThai()} />
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
