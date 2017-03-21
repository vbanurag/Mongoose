/**
 * Created by anurag on 17/3/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoTile from './todotile'
import TodoChange from './TodoChange'
class DisplayTodo extends Component {
    constructor(){
        super();
        this.state = {
            edit: false,
        };
    }
    change(obj){
        this.props.editObject(obj);
    }
    render() {
       const { edit } = this.state;
       const renderData = (item, index) => item.edit
           ? <TodoChange data={item} key ={index} edit={(obj)=>{this.change(obj)}} />
           : <ToDoTile data={item} key ={index} />
        return (
            <div>
                <div className='todoTile'>
                    <ul >
                {this.props.todolist.map((item,index)=> (
                            <li>
                                <a>
                                    <div>
                                        <div className="editdiv" ><span onClick={this.props.edit.bind(this,index)} className="glyphicon glyphicon-pencil	" ></span></div>
                                        <div className="deletediv" ><span  onClick={this.props.del.bind(this,index)} className="glyphicon glyphicon-remove	" ></span></div>
                                    </div>
                                    {renderData(item, index)}
                                </a>
                            </li>
                ))};
                    </ul>
                </div>
            </div>

        );
    }
}

export default DisplayTodo;
