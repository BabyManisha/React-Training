import React, { Component } from 'react'

export class ClassComponentProps extends Component {
    render() {
        return (
            <span>This is Class COmponent PropsData ==> {this.props.name}</span>
        )
    }
}

export default ClassComponentProps
