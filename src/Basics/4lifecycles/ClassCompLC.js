import React, { Component } from 'react'

export class ClassCompLC extends Component {
    // MOunting
    constructor(props){
        super(props);
        console.log("1.InSide constructor => Optional")
        this.state = {
            currentState: 'LifeCycle',
            btn: 'Update'
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("2 & 5.InSide getDerivedStateFromProps => Optional")
        return state;
    }

    render() {
        console.log("3 & 7.InSide render => Required")
        return (
            <div>
                <span>Class COmponent Life Cycle {this.state.currentState}</span>
                <button onClick={() => this.state.btn === 'Update' ? this.setState({currentState: 'LifeCycle -> Updated', btn: 'UnMount'}) : document.getElementById("lc").remove() && this.setState({currentState: 'LifeCycle -> Unmounted', btn: 'Start Again'})}>Next State - {this.state.btn} </button>
            </div>
        )
    }

    componentDidMount(){
        console.log("4.InSide componentDidMount => Optional")
    }

    // Updating
    shouldComponentUpdate(){
        console.log("6.InSide shouldComponentUpdate => Optional")
        return true;
    }

    getSnapshotBeforeUpdate(){
        console.log("7.InSide getSnapshotBeforeUpdate => Optional")
        return true;
    }

    componentDidUpdate(){
        console.log("8.InSide componentDidMount => Optional")
    }

    // UnMount
    componentWillUnmount(){
        console.log("10.InSide componentWillUnmount => Optional")
    }
}

export default ClassCompLC
