/**
 * Created by anurag on 15/3/17.
 */
import React, { Component } from 'react';
import './App.css';

class Title extends Component {
    render() {
        return (
            <div>
                <h1 >{this.props.title}</h1>
            </div>

        );
    }
}

export default Title;