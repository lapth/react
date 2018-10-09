import React, { Component } from 'react';

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
        
        this.props.onBtnEditClick(modifiedUser);
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
                            <div className="btn btn-warning" onClick={() => this.swapFormMode()}><i className="fa fa-edit"/> Sửa</div>
                            <div className="btn btn-danger"><i className="fa fa-trash" /> Xóa</div>
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
                            onChange={(event) => this.onFieldChanged(event)}/>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                            <input type="text" defaultValue={this.props.rowData.tel} name="tel"
                                onChange={(event) => this.onFieldChanged(event)}/>
                        </div>
                    </td>
                    <td>
                        <div className="form-group">
                            <select name="quyen" className="custom-select" required
                                defaultValue = {this.props.rowData.quyen}
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
                            <div className="btn btn-warning" onClick={() => this.onEditDone()}><i className="fa fa-check"/> Done</div>                            
                        </div>
                    </td>
                </tr>
            );
        }
    }
}

export default TableRow;