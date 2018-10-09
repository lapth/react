import React, { Component } from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giaTriTimKiem: ""
        }
    }

    onTimKiem = (event) => {
        this.setState({
            giaTriTimKiem: event.target.value
        });
    }

    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input className="form-control" type="text" placeholder="Tìm kiếm"
                            onChange={(event) => this.onTimKiem(event)} />
                        <div className="btn btn-info" 
                            onClick={() => this.props.returnGiaTriTim(this.state.giaTriTimKiem)}>Tìm</div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;