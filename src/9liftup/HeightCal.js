import React, { Component } from 'react'
import LiftUp from './LiftUp';

export class HeightCal extends Component {
    constructor(props){
        super(props);
        this.state = {
            cm : 30.48,
            height: 1,
        }
    }

    changeHeight = (val) => {
        this.setState({height: val || 1})
    }

    calculateCM = () => {
        this.setState({cm: this.state.height * 30.48})
    }

    render() {
        return (
            <div>
                <LiftUp name={this.props.name} cm={this.state.cm} height={this.state.height} changeHeight={this.changeHeight} calculateCM={this.calculateCM} />
            </div>
        )
    }
}

export default HeightCal
