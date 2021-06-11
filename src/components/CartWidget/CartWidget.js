import React, { Component } from 'react'
import cart from '../../cart1.svg';

const cartStyle = {
    width: '30px',
    height: '30px',
    marginLeft: '10px'
}

class CartWidget extends Component {
    render() {
        return (
            <div>
                <img src={cart} style={cartStyle} alt="cart" />
            </div>
        )
    }
}

export default CartWidget
