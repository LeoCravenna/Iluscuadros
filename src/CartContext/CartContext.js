import React, { createContext, useState } from 'react'

export const CartContext = createContext();


export const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id_char)) {
        cartItems.push({item: item, quantity: quantity});
        console.log(cartItems);
        } 
    }

    const isInCart = (id) => {
        if (cartItems.findIndex((i) => i.item.id === id) >= 0) {
        return true;
        } else {
        return false;
        }
    }

    const removeItem = (id) => {
        cartItems.splice(
        cartItems.findIndex((i) => i.item.id === id)
        );
    }

    const clear = () => {
        setCartItems ([])
    }

    console.log(cartItems);

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
