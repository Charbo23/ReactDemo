import React, { Component } from 'react';
class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.Toggle=this.Toggle.bind(this);
    }
    render() {
        return (
            <div>
                <div className={`boss ${this.state.isShow ? 'show' : 'hide'}`}>Boss级人物——孙悟空</div>
                <div><button onClick={this.Toggle}>{this.state.isShow ? '隐藏Boss' : '召唤Boss'}</button></div>
            </div>
        );
    }

    Toggle() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Animation;