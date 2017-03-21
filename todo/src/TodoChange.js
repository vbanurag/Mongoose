/**
 * Created by anurag on 21/3/17.
 */
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
        this.state={
            obj:{
                name:'',
                date:'',
                status:'pending',
                edit:'false'
            }
        };

    }
    changeHandler(e){
        let {obj}= this.state;
        obj[e.target.name]=e.target.value;
        obj.edit=false;
        this.setState({obj});
    }

    submitHandler(e){
        this.props.edit(this.state.obj);


        }
        componentWillMount(){
            let {obj} = this.state;
            obj = this.props.data;
            this.setState({obj});
        }


    render() {

        return(
            <div>
                <input type="text" name='name' value={this.state.obj.name} onChange={this.changeHandler.bind(this)} />
                <input type="date" name='date' value={this.state.obj.date} onChange={this.changeHandler.bind(this)}/>
                <input type="text"  name="status" value={this.state.obj.status} onChange={this.changeHandler.bind(this)}/>
                <div className="editdiv" ><span onClick={()=>(this.submitHandler(this))} className="glyphicon glyphicon-ok" ></span></div>
            </div>

        )
    }
}

export default TodoTile;
