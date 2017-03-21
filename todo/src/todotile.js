/**
 * Created by anurag on 20/3/17.
 */
/**
 * Created by anurag on 17/3/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoTile extends Component {
    constructor(){
        super();
        this.state={};

    }


    render() {

        return(

            <div>
                <h2>{this.props.data.name}</h2>
                <p>{this.props.data.date}</p>
                <p >Status: {this.props.data.status}</p>
            </div>


        )

    }
}

export default TodoTile;
