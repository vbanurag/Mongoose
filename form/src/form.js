import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Form extends Component {
    constructor(){
        super();
        this.state={
            username:'',
            passwd:'',
            cnfrm_passwd:''
        };
    }
    submitForm(e){
        e.preventDefault();
        this.props.form(this.state);
        this.setState({
            username:'',
            passwd:'',
            cnfrm_passwd:''
        });

    }
    changeHandler(e){
        const state= this.state;
        state[e.target.name]=e.target.value;
        this.setState({state});
    }

    render() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <input type="text" name='username' value={this.state.username}  onChange={this.changeHandler.bind(this)}    placeholder="username"/><br/>
                <input type="password" name='passwd' value={this.state.passwd} onChange={this.changeHandler.bind(this)} placeholder="password"/><br/>
                <input type="password" name='cnfrm_passwd' value={this.state.cnfrm_passwd} onChange={this.changeHandler.bind(this)} placeholder="confirm Password"/><br/>
                <button >Sign up</button>
            </form>

        );
    }
}

export default Form;

