import React, { createContext, useState, useEffect } from 'react';

export const ShopContext = createContext()

export const ShopProvider = (props) => {
    
    useEffect(() => {
        retrieveToys()
    }, []); 

    async function retrieveToys() {
        const response = await fetch(data.rootUrl)
        const values = await response.json()
        const toyNames = values.results.map(t => t.name)
        let toyPrices = {}
        for (let t of toyNames) {
            let price = t.charCodeAt(0) + t.charCodeAt(1)/100
            toyPrices[t] = price
        }
        setData(prev => ({...prev, toys: toyPrices}))
    }

    const [data, setData] = useState(
        {
            rootUrl: "https://swapi.dev/api/starships/",
            toys: {},
            shopList: [],
        }
    )
    
    return (
        <ShopContext.Provider value={[data, setData]}>
            {props.children}
        </ShopContext.Provider>
    )
}
