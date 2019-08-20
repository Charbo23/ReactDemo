import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Animation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.Toggle = this.Toggle.bind(this);
    }
    render() {
        return (
            <div>
                <CSSTransition 
                    in={this.state.isShow}
                    timeout={500}
                    classNames='boss'
                    unmountOnExit
                >
                    <div>Boss级人物——孙悟空</div>
                </CSSTransition>

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