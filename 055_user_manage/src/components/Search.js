import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className="col-12">
                <div className="form-group">
                  <div className="btn-group">
                    <input className="form-control" type="text" placeholder="Tìm kiếm"/>
                    <div className="btn btn-info">Tìm</div>
                  </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default Search;