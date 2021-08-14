import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function Nesting() {
    let { id } = useParams()
    let query = new URLSearchParams(useLocation().search);
    return (
        <div>
            <br/>
            <b>Nesting & Params - Routes</b>
            <br/>
            Param is { id }
            <br/>
            {query && query.get('sm') && <span>Query param is {query.get('sm')} </span>}
        </div>
    )
}