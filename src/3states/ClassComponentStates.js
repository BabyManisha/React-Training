import React, { Component } from 'react'

export class ClassComponentStates extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'State Name'
        }
    }


    render() {
        return (
            <div>
                <span>This is Class COmponent StateDate ==> {this.state.name} </span>
                <button onClick={() => this.setState({name: 'Updated State'})}>Update State Value</button>
            </div>
        )
    }
}

export default ClassComponentStates
