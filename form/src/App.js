import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './form'
class App extends Component {
  constructor(){
      super();
      this.state={
          message:''
      }
      this.fSubmit = this.formSubmit.bind(this);
  }
    formSubmit(value){
      let {message} = this.state;
      if(!value.username || !value.passwd || !value.cnfrm_passwd){
        message='Required Field'
      }
      if( value.passwd !== value.cnfrm_passwd){
          message='Password does not match'
      }
      else{
          message='Login Successfully'
      }
      this.setState({message:message});

    }


    render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Form form={(obj)=>{this.fSubmit(obj)}}/>
          <p>{this.state.message}</p>
      </div>
    );
  }
}

export default App;
