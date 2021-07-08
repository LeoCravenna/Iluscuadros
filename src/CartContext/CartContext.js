import React, { createContext, useState } from 'react'

export const CartContext = createContext();


export const CartProvider = (props) => {

    const [cartItems, setCartItems] = useState([]);

    console.log("Estado antes:",cartItems);

    const addItem = (item, quantity) => {

        const isInCart = cartItems.find(cart => cart.item.id_cuadro === item.id_cuadro);
    
        if (isInCart !== undefined) {
            const newQuantity = isInCart.quantity + quantity;
            const newCart = cartItems.filter(cart => cart.item.id_cuadro !== item.id_cuadro);

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
        let newItem = getItem.find(obj => obj.item.id_cuadro === id);
        let i = getItem.indexOf(newItem);
        getItem.splice(i, 1); 
        setCartItems(getItem);

    }

    const clear = () => {
        setCartItems ([])
    }

    return (
        <CartContext.Provider value={{addItem, removeItem, clear, cartItems, setCartItems}}>
            {props.children}
        </CartContext.Provider>
    )
}
