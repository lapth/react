import React, { Component } from 'react';

class AddUser extends Component {
    render() {
        return (
            <div className="col-3">
                <div className="">
                    <div className="card border-primary mb-3">
                        <div className="card-header">Thêm Mới User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Tên User" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Điện Thoại" />
                            </div>
                            <div className="form-group">
                                  <select className="custom-select" required>
                                    <option value>Chọn Quyền Mặc Định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Mondarator</option>
                                    <option value={3}>Normal</option>
                                  </select>
                            </div>
                            <div className="form-group">
                                <div className="btn btn-primary btn-block">Thêm Mới</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddUser;