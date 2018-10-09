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
      data: [],
      tmpData:[],
      resultFilter: ''
    }
  }

  saveToLocalStorage = (basedData = this.state.data) => {
    localStorage.setItem('UserData', JSON.stringify(basedData));
  }

  componentWillMount() {
    var localData = localStorage.getItem('UserData');
    if (localData === null) {
      this.saveToLocalStorage(fileDuLieu);
      this.setState({
        data: fileDuLieu,
        tmpData: fileDuLieu
      }); 
    } else {
      var storedData = JSON.parse(localData);
      this.setState({
        data: storedData,
        tmpData: storedData
      });
    }
  }
  
  thayDoiTrangThai = () => {
    this.setState({
      trangThaiSua: !this.state.trangThaiSua
    })
  }

  getFilteredData = (filterValue, basedData = this.state.data) => {
    var filteredArr = [];
    basedData.forEach(element => {
      if (element.hoTen.indexOf(filterValue) !== -1) {
        filteredArr.push(element);
      }
    });

    return filteredArr;
  }

  filterTableData = (giaTriCanTim) => {
    this.setState({
      tmpData: this.getFilteredData(giaTriCanTim),
      resultFilter: giaTriCanTim
    });
  }

  addNewUser = (newUser) => {
    this.state.data.push(newUser);
    this.setState({
      tmpData: this.getFilteredData(this.state.resultFilter)
    });
    this.saveToLocalStorage();
  }

  onBtnEditClick = (user) => {
    this.state.data.some((item, index, arr) => {
      if (item.id === user.id) {
        arr[index] = JSON.parse(JSON.stringify(user));
        return true;
      }
    });
    this.setState({
      tmpData: this.getFilteredData(this.state.resultFilter)
    });
    this.saveToLocalStorage();
  }

  onBtnDeleteClick = (userId) => {
    var userData =  this.state.data.filter(item => item.id !== userId);
    this.setState({
      data: userData,
    });
    this.setState({
      tmpData: this.getFilteredData(this.state.resultFilter, userData)
    });
    this.saveToLocalStorage(userData);
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
