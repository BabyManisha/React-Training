import React from 'react'
import useData from './useData'

export default function HcustomHook() {
    const randNumber10 = useData(10)
    const randNumber100 = useData(100)


    return (
        <div>
            Random Numbers are: {randNumber10} {randNumber100}
        </div>
    )
}
