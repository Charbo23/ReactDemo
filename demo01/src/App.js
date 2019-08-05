import React,{Component} from 'react';

class App extends Component{
    render(){
        return(
            <ul className="my-list">
                <li>{false ? "charbo.me" : "NOT RIGHT"}</li>
                <li>I Love React</li>
            </ul>
        );
    }
}

export default App;

