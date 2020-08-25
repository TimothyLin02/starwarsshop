import React from 'react'
import { Link } from "react-router-dom"
import useShopContext from "../hoc/context/useShopContext"

export default function Summary() {
    const {data, checkout} = useShopContext()
    let totalPrice = 0
    const list = data.shopList.map(item => {
        let toy = item['toy']
        let price = item['price']
        totalPrice += parseFloat(price)
        return (
            <tr>
                <td>{toy}</td>
                <td>{price}</td>
            </tr>
        )
    })
    return (
        <>
            <h1>Order Summary:</h1>
            {list.length > 0 ? 
                <>
                    <table>
                        <thead>
                            <tr>
                                <td>Toy</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                    <h2>Total Price: {totalPrice}</h2>
                    <button onClick={()=>checkout()}>Pay</button>
                </>
                :<p>You have not purchased any items.</p>
            }
            <button><Link to={"/shop"}>Back to toys</Link></button>
        </>
    )
}
