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

    const {addItem, removeItem, clear, cartItems} = useContext(CartContext);

    return (
        <div>
            <img src={cart} style={cartStyle} alt="cart" />
            <Badge variant="light">
                {cartItems.length}
            </Badge>
        </div>
    )
}

export default CartWidget


/*class CartWidget extends Component {
    
    render() {

        return (
            <div>
                <img src={cart} style={cartStyle} alt="cart" />
                <Badge variant="light">
                    {cartItems.length}
                </Badge>
            </div>
        )
    }
}

export default CartWidget*/
