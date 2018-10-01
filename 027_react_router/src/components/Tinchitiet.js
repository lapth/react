import React, { Component } from 'react';

class Tinchitiet extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-4">
                            <div className="card-desk">
                                <div className="card">
                                     
                                    <img src={this.props.anh} alt className="img-fluid" /> 
                                    
                                    <blockquote className="blockquote">
                                        <p>{this.props.tieude}</p>
                                    </blockquote>
                                    <p className="card-content">{this.props.noidung}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tinchitiet;