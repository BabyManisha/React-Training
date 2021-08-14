import React, { Component } from 'react'

export class Compo extends Component {
    render() {
        return (
            <div>
                <header>{this.props.header}</header>
                <main>{this.props.children}</main>
                <footer>{this.props.header}</footer>
            </div>
        )
    }
}

export default Compo
