import React, { Component } from 'react';
import data from './newsdata.json';

class Tinchitiet extends Component {

    render() {
        return (
            <div>
                <div>
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100">
                                <h1>Chi tiet</h1>
                            </div>
                        </div>
                    </header>
                </div>
                <div>
                    {
                        data.map((value, key) => {
                            if (value.id == this.props.match.params.id) {
                                return (
                                    <div class="jumbotron jumbotron-fluid">
                                        <div class="container">
                                            <img src={value.anh} alt className="img-fluid" />
                                            <h1 class="display-3">{value.tieude}></h1>

                                            <hr class="my-2" />
                                            <p>{value.noidung}</p>

                                        </div>
                                    </div>
                                );
                            };
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Tinchitiet;