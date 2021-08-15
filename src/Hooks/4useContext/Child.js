import React from 'react'
import GChild from './GChild'
import {ThemeContext} from './Parent'

export default function Child() {
    return (
        <div>
            <b>Child COmponent</b>
            <br />
            Theme Value is ==> 
            <ThemeContext.Consumer>
                {(value) => <b>{value.theme}</b>}
            </ThemeContext.Consumer>
            <GChild />
        </div>
    )
}
