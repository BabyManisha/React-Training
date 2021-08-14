import React, { Component } from 'react'

export class LiftUp extends Component {

    changeHeight(e){
        this.props.changeHeight(e.target.value);
    }


    calculateCM(e){
        e.preventDefault();
        this.props.calculateCM();
    }


    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                {this.props.height} in CM is: <b>{this.props.cm}</b>
                <form onSubmit={(e) => this.calculateCM(e)}>
                    <input type="number" name="height" id="height" value={this.props.height} onChange={(e) => this.changeHeight(e)} />
                    <button type="submit">Convert into CM</button>
                </form>
            </div>
        )
    }
}

export default LiftUp
