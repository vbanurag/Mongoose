/**
 * Created by anurag on 15/3/17.
 */
import React, { Component } from 'react';
class Title extends Component {
    render() {
        return (
            <div className="title">
                <h2 style={{textAlign:'center'}}>{this.props.title} </h2>
            </div>
        );
    }
}
Title.propTypes = {
    title: React.PropTypes.string.isRequired

}

export default Title;