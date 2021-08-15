import React, { useState } from 'react'

export default function HuseState() {
    const [count, setCount] = useState(0)
    return (
        <div>
            Count is: {count}
            <button onClick={() => setCount(count+1)}>Increase Count</button>
        </div>
    )
}
