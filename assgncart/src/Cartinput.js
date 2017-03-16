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
            passValue:'',
            default:''
        }
    }
    changeHandler(e){
        const state= this.state;
        state[e.target.name]=e.target.value;
        this.setState({passValue:state.default});
    }
    inputHandler(event){
        if(event.which==13 ){
                this.setState({passValue: event.target.value}, () => {
                    this.props.addFruit(this.state.passValue);

                });
                this.setState({default:''})
        }
        else{
        }
    }


    render() {
        return (
            <div className="inputCart">
                <input
                    value={this.state.default} onChange={this.changeHandler.bind(this)} name='default'
                    className="inputBox"  type="text"  placeholder="Enter an item seprated with hyphen(-)" onKeyPress={this.inputHandler.bind(this)}  />
            </div>
        );
    }
}

export default Cart;