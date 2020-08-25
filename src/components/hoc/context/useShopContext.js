import { useContext} from 'react'
import { ShopContext } from "./ShopContext"

const useShopContext = () => {
    const [data, setData] = useContext(ShopContext)

    async function addToy(toy) {
        setData(prev => {
            let newData = [...prev.shopList]
            newData.push({toy: toy, price: data.toys[toy]})
            return (
                {...prev, shopList: newData}
             )
        })
    }

    async function removeToy(toy) { 
        setData(prev => {
            let newData = [...prev.shopList]
            for (let i = 0; i < newData.length; i++) {
                if (newData[i].toy === toy) {
                    newData.pop(i)
                    break;
                }
            }
            return (
                {...prev, shopList: newData}
             )
        })
    }

    const checkout = () => {
        console.log("checkout")
        alert("Thank you for shopping")
        clear()
    }

    async function clear() {
        setData(prev => {
            return (
                {...prev, shopList: []}
            )
        })
    }

    return {
        data,
        setData,
        addToy,
        removeToy,
        checkout,
        clear
    }
}

export default useShopContext
