import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Title from './Titile'
import Content from './Content'
class App extends Component {
    constructor(){
        super();
        this.state={
            setTitle:"First Page",
            setContent:"Content Section"
        }
    }

    render() {
        const list =['anurag','rahul','sourav']
        const friendList= list.map((item)=>{
            return <Content contentList = {item}/>
        })
        return (
            <div>
                <Title title={this.state.setTitle}/>

                <h2 className="App">This is second headline </h2>
                <Content content = {this.state.setContent}/>

            </div>

        );
    }
}

export default App;