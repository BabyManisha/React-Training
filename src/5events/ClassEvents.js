import React, { Component } from 'react'

export class ClassEvents extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'Click ME'
        }

        this.changeName = this.changeName.bind(this)
    }

    changeName(){
        this.setState({name: 'Changed!'})
    }

    changeNameInLine(){
        this.setState({name: 'Changed using Inline! `if this callback is passed as a prop to lower components, those components might do an extra re-rendering. `'})
    }

    changeNameArrow = () => {
        this.setState({name: 'Changed using Arrow!'})
    }

    handleArguments = (arg) => {
        alert(arg);
    }

    handleEventArguments(e, arg) {
        console.log(e);
        alert(arg);
    }

    render() {
        return (
            <div>
                <button onClick={this.changeName}>This is Class Events => {this.state.name}</button>
                <button onClick={() => this.changeNameInLine()}>Change Beside Button using Inline Callback FUn</button>
                <button onClick={this.changeNameArrow}>Change Beside Button using Arrow FUn</button>
                <button onClick={this.handleArguments.bind(this, 'this is argument')} >Send Arguments</button>
                <button onClick={(e) => this.handleEventArguments(e, 'argument')} >Send Events & Arguments</button>
            </div>
        )
    }
}

export default ClassEvents
