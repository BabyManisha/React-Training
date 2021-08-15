import React, { useEffect, useState } from 'react'

export default function HuseEffect() {
    const [name, setName] = useState('SitaRam');
    const [count, setCount] = useState(0);

    useEffect(() => {
        // ComponentDidMount
        console.log(`Name is ${name}`);
        // ComponentWillUnMount
        return() => {
            console.log("UNMOUNT!!");
        }
    }, // ComponentDidUpdate
    [name]);

    useEffect(() => {
        console.log(`Count is ${count}`);
    },[count]);

    return (
        <div>
            Name is: {name}
            <button onClick={() => setName('SivaSati')}>Change Name</button>
            <br />
            Count is: {count}
            <button onClick={() => setCount(count+1)}>Change Name</button>
        </div>
    )
}
