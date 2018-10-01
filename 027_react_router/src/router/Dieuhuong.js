import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Home from '../components/Home';
import Lienhe from '../components/Lienhe';
import Tintuc from '../components/Tintuc';


class Dieuhuong extends Component {
    render() {
        return (
           
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/lienhe" component={Lienhe} />
                    <Route path="/tintuc" component={Tintuc} />
                </div>
          
        );
    }
}

export default Dieuhuong;