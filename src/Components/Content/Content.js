import React, { Component } from 'react'

export default class Content extends Component {
    constructor(props) {
        super(props);        
    }
    
    thongbao = () => {
        alert ('Cach xu ly tuong tac');
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
                                    <p>{this.props.trichdan}</p>
                                </div>
                                <div className="row">
                                    <div class="btn btn-group">
                                        <div class="btn btn-info" onClick={this.thongbao}>Edit</div>
                                        <div class="btn btn-warning">Delete</div>
                                    </div>                                    
                                </div>

                                <hr/>
                            </div>
                        </div>
                    </div>                       
        );
    }
}
