import React, { useState } from "react";

export default function FunCond(){
    const[flag, setFlag] = useState(true)
    return(
        <div>
            <b>Functional COnditions</b>
            {flag ? <span>Flag is True</span> : <span>Flag is False</span>}
            <button onClick={() => setFlag(!flag)}>
                {flag && <span>True Flag Button</span> || <span>False Flag Button</span> }
            </button>
        </div>
    )
}