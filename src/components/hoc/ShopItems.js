import React from 'react'
import Controls from '../orderControls/Controls'
import useShopContext from "../hoc/context/useShopContext"
import "./ShopItems.css"

function ShopItems () {
    const {data} = useShopContext()
    return (  
        <>
            <h3 key="numItems">Items in cart: {data.shopList.length}</h3> 
            <Controls key="controls" />
        </>
    )
} 

export default ShopItems
