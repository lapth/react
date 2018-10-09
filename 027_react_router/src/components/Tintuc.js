import React, { Component } from 'react';
import data from './newsdata.json';
import Mautin from './Mautin';

class Tintuc extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row mt-3">
            {
              data.map((value, key) => (
                <Mautin key={key} tinid={value.id} anh={value.anh} tieude={value.tieude} />
               ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Tintuc;