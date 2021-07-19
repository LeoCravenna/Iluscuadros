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

    for (let item of cartItems) {
        acumulador = acumulador + item.quantity;
        //console.log(acumulador);
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
