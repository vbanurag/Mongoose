import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todoinput extends Component {
    constructor(){
        super();
        this.state={
            visible:'none',
            obj:{
                name:'',
                date:'',
                status:'pending',
                edit:false
            },
            error:''
        }
    }

    /*componentWillReceiveProps(props){
        this.setState({ visible:props.visible });
    }*/
    submitHandler(e){
        e.preventDefault();
        if(this.validateName(this.state.obj.name)&& this.validateDate(this.state.obj.date)){
            this.props.form(this.state.obj);
            this.setState({
                obj:{
                    name:'',
                    date:'',
                    status:'pending',
                    edit:false
                },
                error:""

            });
        }
        else{
            this.setState({error:'Invalid Inputs'});
        }

    }
    validateName(str){
        const pattern = /^\w+( +\w+)*$/;
        return pattern.test(str);
    }
    validateDate(str){
        const pattern = /^\d{4}[./-]\d{2}[./-]\d{2}$/;
        return pattern.test(str);
    }

    changeHandler(e){
        const {obj}= this.state;
        obj[e.target.name]=e.target.value;
        this.setState({obj});
    }
    cancelHandler(e){
        e.preventDefault();
        this.setState({
            obj:{
                name:'',
                date:'',
                status:'pending',
                edit:false
            }

        });
    }



    render()  {
    return (
      <div >
              <form className="form-inline" >
                  <div className="form-group">
                      <input type="textbox" className="form-control"  placeholder="Add Task Name"
                             name='name' value={this.state.obj.name}
                             onChange={this.changeHandler.bind(this)}
                      /> &ensp;
                  </div>
                  <div className="form-group mx-sm-3">
                      <input type="date" className="form-control"
                             name='date' value={this.state.obj.date}
                             onChange={this.changeHandler.bind(this)}/>&ensp;
                  </div>
                  <button type="submit"   className="btn btn-primary" onClick={this.submitHandler.bind(this)}>Add</button>&ensp;
                  <button onClick={this.cancelHandler.bind(this)}   className="btn btn-danger">Cancel</button>
              </form>
          <span>{this.state.error}</span>
      </div>
    );
  }
}

export default Todoinput;
