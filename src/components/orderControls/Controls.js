import React from 'react'
import { Link } from "react-router-dom"
import useShopContext from "../hoc/context/useShopContext"
import classes from "./Controls.module.css"

export default function Controls(props) {
    const {data, addToy, removeToy, clear} = useShopContext()
    let addRemoveButtons = []
    for (let toy of Object.keys(data.toys)) {
        addRemoveButtons.push(
        <tr key={toy}>
            <td key={`name ${toy}`}>{toy}</td>
            <td key={`price ${toy}`}>${data.toys[toy]}</td>
            <td key={`buttons ${toy}`}>
                <button key={`add${toy}`} onClick={() => addToy(toy)}>Add</button>
                <button key={`remove${toy}`} onClick={() => removeToy(toy)}>Remove</button>
            </td>
        </tr>
        )
    }

    return [
        <table className={classes.itemTable}>
            <thead>
                <tr>
                    <td>Toy</td>
                    <td>Price</td>
                    <td>Add/Remove Items</td>
                </tr>
            </thead>
            <tbody>
                {addRemoveButtons}
            </tbody>
        </table>,
        <button className={classes.pay}><Link to={"/summary"}>Checkout</Link></button>,
        <button onClick={()=>clear()}>Clear cart</button> 
    ]
}
