import React from 'react'
import { Link } from "react-router-dom"
import useShopContext from "../hoc/context/useShopContext"

export default function Controls(props) {
    const {data, addToy, removeToy, clear} = useShopContext()
    let addRemoveButtons = []
    for (let toy of Object.keys(data.toys)) {
        addRemoveButtons.push(
        <tr>
            <td>{toy}</td>
            <td>Price: {data.toys[toy]}</td>
            <td><button onClick={() => addToy(toy)}>Add</button></td>
            <td><button onClick={() => removeToy(toy)}>Remove</button></td>
        </tr>
        )
    }

    return [
        <table>
            <tbody>
                {addRemoveButtons}
            </tbody>
        </table>,
        <button><Link to={"/summary"}>Checkout</Link></button>,
        <button onClick={()=>clear()}>Clear cart</button> 
    ]
}
