import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props);        
        this.state = {
            trangthai: 0
        }
        this.trichdan = this.props.trichdan;
    }
    
    editOnClick = () => {
        this.setState({
            trangthai:1            
        });
    }

    saveOnClick = () => {
        this.setState({
            trangthai:0
        })
        this.trichdan = this.trunggian.value;
    }

    renderButton = () => {
        return (
            <div className="row">
            <div class="btn btn-group">
                <div class="btn btn-info" onClick={this.editOnClick}>Edit</div>
                <div class="btn btn-warning">Delete</div>
            </div>                                    
        </div>
        )
    }

    renderForm = () => {
        return (
            <div className="row">
                <div className="form-group">
                    <input defaultValue={this.trichdan} type="text" name="txtTrichDan" className="form-control"  
                        ref = {(dulieunhap) => {this.trunggian = dulieunhap}} />
                    <div className="btn btn-block btn-danger" onClick={this.saveOnClick}>Save</div>
                </div>
            </div>
        )
    }

    showItem = () => {
        if (this.state.trangthai === 0) {
            return this.renderButton();
        } else if (this.state.trangthai === 1) {
            return this.renderForm();
        }
    }

    render() {
        return (
            
                    <div className="col-lg-4">
                        <div className="row">
                            <div className={"col-lg-5 " }>
                                <div className="p-1">
                                    <img className="img-fluid rounded-circle" src={this.props.anh} alt />
                                </div>
                            </div>
                            <div className={"col-lg-7 " + this.props.vitri2}>
                                <div className="p-1">
                                    <h2 className="display-4">{this.props.tieude}</h2>
                                    <p>{this.trichdan}</p>
                                </div>
                               <hr/>

                                {this.showItem()}
                            </div>
                        </div>
                    </div>     
                    
                   
        );
    }
}
