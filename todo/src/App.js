import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './todoinput'
import DisplayTodo from './displaytodo'
import Title from './Title'
import PrintTile from './todotile'
class App extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            visible:false,
            listSet:false
        }
        this.delTask = this.deleteTask.bind(this);
    }
    clickHandler(){
        this.setState({visible:true})
    }
    todoInput(passObj){
        let {list}=this.state;
        list.push(passObj);
        this.setState({list},()=>{this.setState({listSet:true})});

    }
    deleteTask(id){
        let{list}=this.state;
        const updateList = list.filter((item,index)=>(index!==id));
        list=updateList;
        this.setState({
            list:updateList});
    }
    updateStatus(id){
        let{list}=this.state;
        list[id].status='done';
        this.setState({list})
    }
    editable(id){
        let{list}=this.state;
        list[id].edit=!list[id].edit;
        this.setState({list});
    }
    changeObj(obj){
        let{list}=this.state;
        for(let i=0;i<list.length;i++){
            if(list[i].name==obj.name){
                list[i]=obj;
                this.setState({list})
            }
        }
    }


  render() {
    return (
      <div className="App">
          <Title/>
        <button className="btn btn-success"   onClick={this.clickHandler.bind(this)}> Add Todo </button>

          {this.state.visible ? <TodoInput form={(obj)=>{this.todoInput(obj)}} /> : <span />   }
          {this.state.listSet ?<DisplayTodo
              todolist={this.state.list}
              setStatus={(id)=>{this.updateStatus(id)}}
              del={(id)=>{this.deleteTask(id)}}  edit={(id)=>{this.editable(id)} } editObject={(obj)=>this.changeObj(obj)}/>:<span/>}

      </div>
    );
  }
}

export default App;
