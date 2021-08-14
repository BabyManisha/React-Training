import React, { Component } from 'react'

export class ClassCond extends Component {
    state = {
        flag: true
    }
    render() {
        return (
            <div>
                <b>Class COnditions</b>
                {this.state.flag ? <span>Flag is True</span> : <span>Flag is False</span>}
                <button onClick={() => this.setState({flag: !this.state.flag})}>
                    {(this.state.flag && <span>True Flag Button</span>) || <span>False Flag Button</span> }
                </button>
            </div>
        )
    }
}

export default ClassCond
