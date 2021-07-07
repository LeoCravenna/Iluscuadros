import React, { createContext, useState } from 'react'

export const CartContext = createContext();


export const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    console.log("Estado antes:",cartItems);

    const addItem = (item, quantity) => {

        const isInCart = cartItems.find(cart => cart.item.char_id === item.char_id);
    
        if (isInCart !== undefined) {
            const newQuantity = isInCart.quantity + quantity;
            const newCart = cartItems.filter(cart => cart.item.char_id !== item.char_id);

            setCartItems([
                ...newCart, {item, quantity:newQuantity}
            ])

        } else {

            setCartItems([
                ...cartItems, {item, quantity}
            ])

        }   
    
    }

    console.log("Estado despues:",cartItems);

    const removeItem = (id) => {

        const getItem = [...cartItems];
        let newItem = getItem.find(obj => obj.item.char_id === id);
        let i = getItem.indexOf(newItem);
        getItem.splice(i, 1); 
        setCartItems(getItem);

    }

    const clear = () => {
        setCartItems ([])
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
