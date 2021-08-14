import React, { Component } from 'react'

export default class ApiData extends Component {
    constructor(pros){
        super(pros);
        this.state = {
            posts: []
        }
    }

    getData(){
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(resp => {
                this.setState({posts: resp})
            })
    }

    render() {
        return (
            <div>
                <b>Get Data from API and Display</b>
                <button onClick={() => this.getData()}>Get Data</button>
                <ul>
                    {this.state.posts.map(p => (
                        <li key={p.id}>{p?.title}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
