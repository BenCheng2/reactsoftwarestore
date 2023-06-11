import React from 'react'
import {Outlet, useParams} from "react-router-dom";

export default function ProductDetail() {

    let {id} = useParams()

    return (
        <div>
            <h1>ID: {id}</h1>
        </div>
    )
}
