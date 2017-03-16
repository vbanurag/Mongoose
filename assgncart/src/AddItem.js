/**
 * Created by anurag on 15/3/17.
 */
import React, { Component } from 'react';
import './App.css';
import './style.css';
import Total  from './carttotal'
class Additem extends Component {
    constructor(){
        super();

    }
    render() {
        return (
           <div>
            {this.props.passItem.map((item,value)=>(
                <div className="page">
                    <table className="cart">
                    <tr className="row">
                        <td className="first">{item.fruit}</td>
                        <td className="second">{item.qty} </td>
                        <td className="third"> <i className="fa fa-inr" aria-hidden="true"></i>{item.price} </td>
                        <td className="fourth"><i className="fa fa-plus" onClick={this.props.inc.bind(this,value)} aria-hidden="true"></i>   <i className="fa fa-minus" onClick={this.props.dec.bind(this,value)} aria-hidden="true"></i></td>
                        <td className="five"> <i className="fa fa-trash-o" onClick={this.props.del.bind(this,value)} aria-hidden="true"></i></td>
                    </tr>
                    </table>
                </div>
            ))};

           </div>

        )
    }



}

export default Additem;