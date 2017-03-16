import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './Title'
import Cart from './Cartinput'
import Total from './carttotal'
import Additem from './AddItem';

class App extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            error:'',
            price:0

        }
        this.addFruit = this.addItem.bind(this)
        this.incmnt= this.increment.bind(this)
        this.decmnt= this.decrement.bind(this);
        this.del=this.deleteItem.bind(this);

    }

    addItem(text){
      const {list}=this.state;
        const obj={
        }
        const validate= /[a-zA-Z]-[0-9]/
           if(text.match(validate)){
                obj.fruit=text.split('-')[0];
                obj.qty=1;
                obj.price=text.split('-')[1];
                list.push(obj);
                this.setState({list});
                this.setState({price: (this.state.price)+(obj.qty*obj.price)})
                console.log(this.state.list)
            }
            else{
               this.setState({error:'invalid Value'});
                console.log("Inavlid Value");
            }

        }
    increment(id){
        let{list}=this.state;
        let obj=list[id];
        obj.qty++;
        this.setState({list});
        this.totalPrice();

    }
    decrement(id){
        let{list}=this.state;
        let obj=list[id];
        if(obj.qty>1){
            obj.qty--;
        }
        this.setState({list});
        this.totalPrice();
    }
    deleteItem(id){
        let{list}=this.state;
        const updateList = list.filter((item,index)=>(index!==id));
        list=updateList;
        this.setState({list:updateList});
        this.totalPrice();
    }
    totalPrice(){
        const {list}=this.state;
        let priceChange = 0;
        list.map((item)=>{
            priceChange =priceChange+(item.qty*item.price);
        })
        this.setState({price:priceChange});

    }


  render(){
    return (
      <div>
        <Title title={'My Cart'}/>
        <Cart addFruit={(value)=>{this.addFruit(value)}} />
        <Additem passItem={this.state.list} inc={(id)=>{this.incmnt(id)}} dec={(id)=>{this.decmnt(id)}} del={(id)=>{this.del(id)}}/>
          <Total grant={this.state.price}/>
      </div>
    );
  }
}

export default App;
