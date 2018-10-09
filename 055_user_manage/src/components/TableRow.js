import React, { Component } from 'react';

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{this.props.rowData.hoTen}</td>
                <td>{this.props.rowData.tel}</td>
                <td>{this.props.quyens[this.props.rowData.quyen]}</td>
                <td>
                    <div className="btn-group">
                        <div className="btn btn-warning"><i className="fa fa-edit" /> Sửa</div>
                        <div className="btn btn-danger"><i className="fa fa-trash" /> Xóa</div>
                    </div>
                </td>
            </tr>
        );
    }
}

export default TableRow;