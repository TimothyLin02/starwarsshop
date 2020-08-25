import React from 'react'
import Controls from '../orderControls/Controls'
import useShopContext from "../hoc/context/useShopContext"

function ShopItems () {
    const {data} = useShopContext()
    return [  
        <h3>Items in cart: {data.shopList.length}</h3>, 
        <Controls/>
    ]
} 

export default ShopItems
