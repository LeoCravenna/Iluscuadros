import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import './Cart.css'

function Cart() {

    const {addItem, removeItem, clear, cartItems} = useContext(CartContext);
    console.log(cartItems);
    return (
        <div className="cartContainer">
            <div className="content">
                <h1>Carrito</h1>
                <p>{cartItems.name}</p>
            </div>
        </div>
    )
}

export default Cart
