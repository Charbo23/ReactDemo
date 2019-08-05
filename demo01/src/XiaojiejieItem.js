import React, { Component } from 'react';
class XiaojiejieItem extends Component {

    render() { 
        return ( 
            <li>
                <span>{this.props.content.value}</span>
                <button onClick={this.handleClick.bind(this)}>删除</button>
            </li>
         );
    }

    handleClick(){
        alert(this.props.content.id);
    }
}
 
export default XiaojiejieItem;