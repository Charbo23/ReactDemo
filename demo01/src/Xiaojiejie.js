import React, { Component, Fragment } from 'react';
import shortid from 'shortid';
import './style.css';
import XiaojiejieItem from "./XiaojiejieItem";

class Xiaojiejie extends Component {
    //生命周期函数指在某一个时刻组件会自动调用执行的函数
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.onKeyUp = this.onKeyUp.bind(this);
        this.state = {
            inputValue: '',
            list: [
                { id: shortid.generate(), value: '基础按摩' },
                { id: shortid.generate(), value: '精油推背' }
            ]
        }
    }


    render() {
        return (
            <Fragment>
                <div>
                    {/* for改为htmlFor,class改成className */}
                    <label htmlFor="serviceName">增加服务：</label>
                    <input
                        id="serviceName"
                        className="input"
                        value={this.state.inputValue}
                        onChange={this.inputChange}
                        onKeyUp={this.onKeyUp}
                        ref={(inputElement) => { this.input = inputElement }}
                    />
                    <button onClick={this.addItem}>增加服务</button>
                </div>
                <ul ref={(ulElement) => { this.ul = ulElement }}>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                // <li key={item.id}>
                                //     <span dangerouslySetInnerHTML={{__html:item.value}}></span>
                                //     <button data-id={item.id} onClick={this.deleteItem}>删除</button>
                                // </li> 
                                <XiaojiejieItem
                                    key={item.id}
                                    content={item}
                                    deleteItem={this.deleteItem}
                                // avname="Jane Doe"
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        );
    }

    inputChange(e) {
        // console.log(e.target.value);
        // this.state.inputValue=e.target.value;
        this.setState({
            inputValue: this.input.value
        })
    }
    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.addItem()
        }
    }
    async addItem() {
        if (!this.state.inputValue) {
            return;
        }
        //setState为异步方法,可用async/await或者回调函数
        await this.setState({
            //...this.state.list相当于数组中原来的元素
            list: [...this.state.list, { id: shortid.generate(), value: this.state.inputValue }],
            inputValue: ''
        })
        // console.log(this.ul.querySelectorAll('li').length);
        
    }

    // deleteItem(e){
    //    let index = e.target.getAttribute('data-id');
    //    //这样可以避免直接操作 this.state.list
    //    let list = [...this.state.list];
    //    list = list.filter((listItem) => listItem.id !== index);
    //    this.setState({
    //        list: list
    //    });
    // }
    deleteItem(itemId) {
        let list = [...this.state.list];
        list = list.filter((listItem) => listItem.id !== itemId);
        this.setState({
            list: list
        });
    }
}

export default Xiaojiejie;