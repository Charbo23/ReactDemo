import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XiaojiejieItem extends Component {
    
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    render() { 
        return ( 
            <li>
                <span>
                    {this.props.avname}-为你做-{this.props.content.value}
                </span>
                <button data-id={this.props.content.id} onClick={this.handleClick}>删除</button>
            </li>
         );
    }

    handleClick(){
        this.props.deleteItem(this.props.content.id);
        
    }

}

XiaojiejieItem.propTypes={
    avname:PropTypes.string.isRequired,
    content:PropTypes.object,
    index:PropTypes.number,
    deleteItem:PropTypes.func
}

XiaojiejieItem.defaultProps={
    avname:'Jane Doe',
    
}

export default XiaojiejieItem;