import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        // setCart([...cart, item])
        setCart((prevItems) => [...prevItems, item])
    }
    useEffect(() => {
        console.log(cart)
    }, [cart])

    const delItem = (index) => {
        const remainingItems = cart.filter((item, i) => i !== index);
        setCart(remainingItems);
    }

    const delAll = () => {
        setCart([]);
    }
    
    return <CartContext.Provider value={{cart, addToCart, delItem, delAll}}>
        { children }
    </CartContext.Provider>
}
export const useCart = () => {
    return useContext(CartContext);
}