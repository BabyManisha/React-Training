import React from 'react'
import HuseState from './1useState/HuseState'
import HuseEffect from './2useEffect.js/HuseEffect'
import HcustomHook from './3customHooks/HcustomHook'
import Parent from './4useContext/Parent'

export default function Hooks() {
    return (
        <div>
            <h3>Hooks</h3>
            <ul>
                <li>
                    <b>useState</b>
                    <HuseState/>
                </li>
                <li>
                    <b>useEffect</b>
                    <HuseEffect/>
                </li>
                <li>
                    <b>Custom Hooks</b>
                    <HcustomHook/>
                </li>
                <li>
                    <b>useContext</b>
                    <Parent />
                </li>
            </ul>
        </div>
    )
}
