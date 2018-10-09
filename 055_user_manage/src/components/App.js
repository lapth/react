import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import ButtonsSwap from './ButtonsSwap';
import fileDuLieu from './data.json';
import quyens from './quyens.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangThaiSua: false,
      data: fileDuLieu,
      tmpData:fileDuLieu.slice(0),
      resultFilter: ''
    }
  }

  thayDoiTrangThai = () => {
    this.setState({
      trangThaiSua: !this.state.trangThaiSua
    })
  }

  filterTableData = (giaTriCanTim) => {
    this.setState({
      resultFilter: giaTriCanTim
    });
    var filteredArr = [];
    this.state.data.forEach(element => {
      if (element.hoTen.indexOf(giaTriCanTim) !== -1) {
        filteredArr.push(element);
      }
    });
    this.setState({tmpData: filteredArr});
  }

  addNewUser = (newUser) => {
    var userData = this.state.data;
    userData.push(newUser);
    this.setState({
      data: userData
    });
    this.filterTableData(this.state.resultFilter);
  }

  onBtnEditClick = (user) => {
    this.state.data.some((item, index, arr) => {
      if (item.id === user.id) {
        arr[index] = JSON.parse(JSON.stringify(user));
        return true;
      }
    });
    this.filterTableData(this.state.resultFilter);
  }

  onBtnDeleteClick = (userId) => {
    var userData = this.state.data.filter(item => item.id !== userId);
    this.setState({
      data: userData
    });
    this.filterTableData(this.state.resultFilter);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search returnGiaTriTim={this.filterTableData} />
              <Tabledata 
                  data = {this.state.tmpData} quyens={quyens} 
                  onBtnEditClick = {this.onBtnEditClick} 
                  onBtnDeleteClick = {this.onBtnDeleteClick}/>
              <div className="col-3">
                <ButtonsSwap trangThaiSua={this.state.trangThaiSua} thayDoiTrangThai={this.thayDoiTrangThai} />
                <AddUser trangThaiSua={this.state.trangThaiSua} quyens={quyens} addNewUser={this.addNewUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
