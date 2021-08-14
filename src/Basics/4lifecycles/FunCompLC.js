import React, { useEffect, useState } from "react";

export default function FunCompLC(){
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("SMMSMSMS")
    }, [])

    return(
        <div>
            <span>Functional Component Life Cycle {count}</span>
            <button onClick={() => setCount(count+ 1)} >Update State</button>
        </div>
    )
}