/**
 * Created by anurag on 15/3/17.
 */
import React, { Component } from 'react';
import './App.css';
import './style.css';


class Cart extends Component {

    constructor(){
        super();
        this.state={
            passValue:''
        }
        this.count=0;
    }
    inputHandler(event){

        if(event.which==13 ){
                this.setState({passValue: event.target.value});
                event.target.value = "";
                this.props.addFruit(this.state.passValue);
        }
        else{
        }
    }


    render() {
        return (
            <div className="inputCart">
                <input className="inputBox"  type="text"  placeholder="Enter an item seprated with hyphen(-)" onKeyPress={this.inputHandler.bind(this)}  />
            </div>
        );
    }
}

export default Cart;