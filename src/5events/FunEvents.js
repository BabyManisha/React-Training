import React, { useState } from "react";

function clickMe(){
    alert("cliceddddkMe")
}

export default function FunEvents(){
    const [name, setName] = useState('CLick Me')

    function changeName(){
        setName('Changed!')
    }

    function sendArg(arg){
        alert(arg)
    }

    function sendEventArg(e, arg){
        console.log(e);
        alert(arg)
    }

    return(
        <div>
            <button onClick={clickMe}>This is Functional Events => {name}</button>
            <button onClick={changeName}>Change Beside Button Name</button>
            <button onClick={sendArg.bind(this, 'arguuument')}>Arguments</button>
            <button onClick={(e) => sendEventArg(e, 'argument')}>Event & Arguments</button>
        </div>
    )
}