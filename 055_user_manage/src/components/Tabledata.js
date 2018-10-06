import React, { Component } from 'react';

class Tabledata extends Component {
    render() {
        return (
            <div className="col-9">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện Thoại</th>
                            <th>Quyền Hạn</th>
                            <th>Thao Tác</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Trần Văn A</td>
                                <td>0123456789</td>
                                <td>Administrator</td>
                                <td>
                                    <div className="btn-group">
                                        <div className="btn btn-warning"><i className="fa fa-edit"/> Sửa</div>
                                        <div className="btn btn-danger"><i className="fa fa-trash"/> Xóa</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Trần Văn A</td>
                                <td>0123456789</td>
                                <td>Administrator</td>
                                <td>
                                    <div className="btn-group">
                                        <div className="btn btn-warning"><i className="fa fa-edit"/> Sửa</div>
                                        <div className="btn btn-danger"><i className="fa fa-trash"/> Xóa</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td >3</td>
                                <td>Trần Văn A</td>
                                <td>0123456789</td>
                                <td>Administrator</td>
                                <td>
                                    <div className="btn-group">
                                        <div className="btn btn-warning"><i className="fa fa-edit"/> Sửa</div>
                                        <div className="btn btn-danger"><i className="fa fa-trash"/> Xóa</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Trần Văn A</td>
                                <td>0123456789</td>
                                <td>Administrator</td>
                                <td>
                                    <div className="btn-group">
                                        <div className="btn btn-warning"><i className="fa fa-edit"/> Sửa</div>
                                        <div className="btn btn-danger"><i className="fa fa-trash"/> Xóa</div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Trần Văn A</td>
                                <td>0123456789</td>
                                <td>Administrator</td>
                                <td>
                                    <div className="btn-group">
                                        <div className="btn btn-warning"><i className="fa fa-edit"/> Sửa</div>
                                        <div className="btn btn-danger"><i className="fa fa-trash"/> Xóa</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                </table>
            </div>
        );
    }
}

export default Tabledata;