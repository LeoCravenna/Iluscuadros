import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import Badge from 'react-bootstrap/Badge'
import cart from '../../cart1.svg';

const cartStyle = {
    width: '30px',
    height: '30px',
    marginLeft: '10px'
}

function CartWidget() {

    const {cartItems} = useContext(CartContext);

    let acumulador = 0;

    if (cartItems.length > 0 && cartItems.length < 2){  
        acumulador = cartItems[0].quantity;

    } else if (cartItems.length > 0){    
        acumulador = cartItems.reduce((a,b)=> a.quantity + b.quantity);
    }

    return (
        <div>
            <img src={cart} style={cartStyle} alt="cart" />
            
            {acumulador > 0 ?
                <Badge variant="light">
                
                    {acumulador}

                </Badge>
            : 
                <p></p>
            }

        </div>
    )
}

export default CartWidget
