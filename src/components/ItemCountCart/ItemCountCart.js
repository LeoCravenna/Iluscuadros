import React, { useState, useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Button } from 'semantic-ui-react'
import './ItemCountCart.css'

const btnMas = {
    marginRight: '10px',
    height: '15px', 
    padding: '0px', 
    backgroundColor: 'transparent', 
    color: 'green'
}

const btnMenos = {
    marginLeft: '10px', 
    height: '15px', 
    padding: '0px', 
    backgroundColor: 'transparent', 
    color: 'red'
}

function ItemCountCart({ stock, initial, item}) {
    
    const {handleQuantityUp, handleQuantityDown} = useContext(CartContext);
    const [count, setCount] = useState(initial)

    const handleCounterUp = () => {
            setCount(count + 1);
            handleQuantityUp(item, initial);
	};

	const handleCounterDown = () => {
            setCount(count - 1);
            handleQuantityDown(item, initial);
	};

    return (
        
        <div>
            <div className='card-content'>
            
                {stock > count ?                                                
                    <Button onClick={handleCounterUp} style={btnMas}><b>+</b></Button>
                
                :   <Button disabled={true} style={btnMas}><b>+</b></Button>          
                }

                <p>{count}</p>

                {count > 1 ? 
                    <Button onClick={handleCounterDown} style={btnMenos}><b>-</b></Button>
                
                :   <Button disabled={true} style={btnMenos}><b>-</b></Button>    
                }

            </div>
        </div>
        
    )
}

export default ItemCountCart
