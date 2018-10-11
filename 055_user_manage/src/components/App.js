import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import ButtonsSwap from './ButtonsSwap';
import fileDuLieu from './data.json';
import quyens from './quyens.json';
import {connect} from 'react-redux';
import * as APP_CONST from '../common/AppConst'

class App extends Component {

  saveToLocalStorage = (basedData = this.state.data) => {
    localStorage.setItem('UserData', JSON.stringify(basedData));
  }

  componentWillMount() {
    var localData = localStorage.getItem('UserData');
    if (localData === null) {
      this.saveToLocalStorage(fileDuLieu);
      this.props.syncLocalStorage(fileDuLieu);
    } else {
      var storedData = JSON.parse(localData);
      this.props.syncLocalStorage(storedData);
    }
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
                  data = {this.props.tmpData} quyens={quyens} 
                  onBtnEditClick = {this.onBtnEditClick} 
                  onBtnDeleteClick = {this.onBtnDeleteClick}/>
              <div className="col-3">
                <ButtonsSwap />
                <AddUser 
                    trangThaiSua={this.props.trangThaiSua} 
                    quyens={quyens} 
                    addNewUser={this.addNewUser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {...state};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    syncLocalStorage: (storedData) => {
      dispatch({
        type: APP_CONST.STORE_SYNC_LOCAL_STORAGE,
        data: storedData,
        tmpData: storedData
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
