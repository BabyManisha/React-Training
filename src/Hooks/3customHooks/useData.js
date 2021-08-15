import {useState, useEffect} from 'react'

export default function useData(param) {
    const [data, setData] = useState();

    useEffect(() => {
        setData(parseInt(Math.random(param)*100))
    },[]);

    return data;
}
