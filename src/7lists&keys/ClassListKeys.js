import React, { Component } from 'react'

export class ClassListKeys extends Component {
    constructor(props){
        super(props);
        this.state = {
            names: ['siva', 'parvathi', 'ganesh', 'shanmukh', 'manikanta' , 'nandi']
        }
    }

    render() {
        return (
            <div>
                <b>Class Component Lists & keys</b>
                <ul>
                    {this.state.names.map((na, i) => (
                        <li key={i}>{na}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ClassListKeys
