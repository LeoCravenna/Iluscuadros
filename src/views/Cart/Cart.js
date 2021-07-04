import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import './Cart.css'

function Cart() {
    
    const {cartItems} = useContext(CartContext);
    console.log("Estado después:",cartItems);
    return (
        <div className="cartContainer">
            <div className="content">
                <h1>Carrito</h1>

                <p>{cartItems.map(item => {
                    <h1>{item.item.name}</h1>
                })}</p>
                
            </div>
        </div>
    )
}

export default Cart
