import React, { Component } from 'react';
import * as APP_CONST from '../common/AppConst';
import {connect} from 'react-redux';
import DataFilter from '../common/DataFilter';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            hoTen: this.props.rowData.hoTen,
            tel: this.props.rowData.tel,
            quyen: this.props.rowData.quyen
        };
    }

    swapFormMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
    }

    onFieldChanged = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    onEditDone = () => {
        this.swapFormMode();
        //var modifiedUser = this.props.rowData;  // will edit the object in memory
        var modifiedUser = JSON.parse(JSON.stringify(this.props.rowData)); // copy object by JSON
        modifiedUser.hoTen = this.state.hoTen;
        modifiedUser.tel = this.state.tel;
        modifiedUser.quyen = this.state.quyen;

        this.props.onEditDone(this.props.data, modifiedUser, this.props.resultFilter);
    }

    onDelete = (userId) => {
        this.props.onDelete(this.props.data, userId, this.props.resultFilter);
    }

    render() {
        if (this.state.editMode !== true) {
            return (
                <tr>
                    <td>{this.props.stt + 1}</td>
                    <td>{this.props.rowData.hoTen}</td>
                    <td>{this.props.rowData.tel}</td>
                    <td>{this.props.quyens[this.props.rowData.quyen]}</td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning" onClick={() => this.swapFormMode()}><i className="fa fa-edit" /> Sửa</div>
                            <div className="btn btn-danger" onClick={() => this.onDelete(this.props.rowData.id)}>
                                <i className="fa fa-trash" /> Xóa</div>
                        </div>
                    </td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td>{this.props.stt + 1}</td>
                    <td>
                        <div className="form-group">
                            <input type="text" defaultValue={this.props.rowData.hoTen} name="hoTen"
                                onChange={(event) => this.onFieldChanged(event)} />
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                            <input type="text" defaultValue={this.props.rowData.tel} name="tel"
                                onChange={(event) => this.onFieldChanged(event)} />
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                            <select name="quyen" className="custom-select" required
                                defaultValue={this.props.rowData.quyen}
                                onChange={(event) => this.onFieldChanged(event)}>
                                {
                                    this.props.quyens.map((item, key) => {
                                        if (key > 0) {
                                            return <option value={key} key={key}>{item}</option>;
                                        }
                                    })
                                }
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning" onClick={() => this.onEditDone()}><i className="fa fa-check" /> Done</div>
                        </div>
                    </td>
                </tr>
            );
        }
    }
}

const mapStateToProps = (state) => {
    return {
        tmpData: state.tmpData,
        data: state.data,
        resultFilter: state.resultFilter,
        quyens: state.quyens
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEditDone: (curData, modifiedUser, resultFilter) => {
            curData.some((item, index, arr) => {
                if (item.id === modifiedUser.id) {
                  arr[index] = JSON.parse(JSON.stringify(modifiedUser));
                  return true;
                }
            });
            var newTmpData = DataFilter.getFilteredData(resultFilter, curData);
            dispatch({
                type: APP_CONST.STORE_EDIT_USER,
                data: curData,
                tmpData: newTmpData
            })
        },

        onDelete: (curData, userId, resultFilter) => {
            var userData =  curData.filter(item => item.id !== userId);
            var newTmpData = DataFilter.getFilteredData(resultFilter, userData);
            dispatch({
                type: APP_CONST.STORE_DELETE_USER,
                data: userData,
                tmpData: newTmpData
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableRow)