import React, { useState } from "react"
 
export default function FunListKeys(){
    const [name] = useState(['ram', 'sita', 'lakshman', 'hanuman'])
    return(
        <div>
            <b>FUnctional List & Keys</b>
            <ul>
                {name.map((na, i) => (
                    <li key={i}>{na}</li>
                ))}
            </ul>
        </div>
    )
}
