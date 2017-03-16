/**
 * Created by anurag on 15/3/17.
 */
import React, { Component } from 'react';
import './App.css';
class Section extends Component {
    constructor(){
        super();
        this.state={
            text:''

        }
    }
    typeText(e){

        if(e.target.value.length<=10){
            this.setState({text:e.target.value});
            this.setState({error:""});
        }
        else if (e.target.value.length>10){
            this.setState({error:"only 10 character"});
        }

    }

    render() {
        return (
            <div>
                <h4>{this.content}</h4>
                <p>This is first pararaph for the content part</p>
                <p>Friend List</p>
                <p>Input box which takes only 10 char</p>
                <input type="text" onChange={this.typeText.bind(this)} value={this.state.text}></input>
                <h5>{this.state.text} {this.state.error}</h5>
            </div>

        );
    }
}

export default Section;
//<h4 >{this.props.contentList}</h4>