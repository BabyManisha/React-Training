import React, {useState} from 'react';

export default function FunStates(){
    const [name, setName] = useState('State Name')
    return(
        <div>
            <span>THis is functional Component stateData ==> {name}</span>
            <button onClick={ () => setName('Update State') }>Update State Value</button>
        </div>
    )
}