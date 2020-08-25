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
            <td>{toy}</td>
            <td>${data.toys[toy]}</td>
            <td><td><button key={`add${toy}`} onClick={() => addToy(toy)}>Add</button></td>
            <td><button key={`remove${toy}`} onClick={() => removeToy(toy)}>Remove</button></td></td>
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
