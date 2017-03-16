/**
 * Created by anurag on 15/3/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

class Carttotal extends Component {

    render() {
        return (
            <div className="cartTotal">
                <h5>Cart Total : <i className="fa fa-inr" aria-hidden="true"></i>{this.props.grant} </h5>
            </div>
        );
    }
}

export default Carttotal;