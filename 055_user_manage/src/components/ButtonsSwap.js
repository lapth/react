import React, { Component } from 'react';

class ButtonsSwap extends Component {
    constructor(props) {
        super(props);
    }

    hienThiSua = () => {
        if (this.props.trangThaiSua === true) {
            return <div className="btn btn-outline-primary btn-block" 
                onClick={() => this.props.thayDoiTrangThai()}>Thêm Mới</div>
        } else {
            return <div className="btn btn-outline-secondary btn-block" 
                onClick={() => this.props.thayDoiTrangThai()}>Ẩn</div>
        }
    }

    render() {
        return (
            <div className="card border-primary">
                <div className="card-body">
                    {this.hienThiSua()}
                </div>
            </div>
        );
    }
}

export default ButtonsSwap;