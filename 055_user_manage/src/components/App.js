import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Search from './Search';
import Tabledata from './Tabledata';
import AddUser from './AddUser';
import ButtonsSwap from './ButtonsSwap';
import fileDuLieu from '../datas/data.json';
import {connect} from 'react-redux';
import * as APP_CONST from '../common/AppConst'
import DataFilter from '../common/DataFilter'

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

  onBtnEditClick = (user) => {
    this.state.data.some((item, index, arr) => {
      if (item.id === user.id) {
        arr[index] = JSON.parse(JSON.stringify(user));
        return true;
      }
    });
    this.setState({
      tmpData: this.getFilteredData(this.props.resultFilter)
    });
    this.saveToLocalStorage();
  }

  onBtnDeleteClick = (userId) => {
    var userData =  this.props.data.filter(item => item.id !== userId);
    this.setState({
      data: userData,
    });
    this.setState({
      tmpData: this.getFilteredData(this.props.resultFilter, userData)
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
              <Search />
              <Tabledata 
                  data = {this.props.tmpData} quyens={this.props.quyens} 
                  onBtnEditClick = {this.onBtnEditClick} 
                  onBtnDeleteClick = {this.onBtnDeleteClick}/>
              <div className="col-3">
                <ButtonsSwap />
                <AddUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
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
