import React, {useState} from 'react'
//import { CartContext } from '../../CartContext/CartContext'
import { Button } from 'semantic-ui-react'
import './ItemCountCart.css'

function ItemCountCart({ stock, initial}) {
    
    //const {addItem} = useContext(CartContext);
    
    const [count, setCount] = useState(initial)
    //const [countStock, setCountStock] = useState(stock)

    const handleCounterUp = () => {
            setCount(count + 1)
	};

	const handleCounterDown = () => {
            setCount(count - 1);
	};

    return (
        
        <div>
            <div className='card-content'>
            
                {stock > count ?                                                
                    <Button onClick={handleCounterUp} style={{marginRight: '10px', height: '15px', padding: '0px', backgroundColor: 'transparent', color: 'green'}}><b>+</b></Button>
                
                :   <Button disabled={true} style={{marginRight: '10px', height: '15px',  padding: '0px', backgroundColor: 'transparent', color: 'green'}}><b>+</b></Button>          
                }

                <p>{count}</p>

                {count > 1 ? 
                    <Button onClick={handleCounterDown} style={{marginLeft: '10px', height: '15px', padding: '0px', backgroundColor: 'transparent', color: 'red'}}><b>-</b></Button>
                
                :   <Button disabled={true} style={{marginLeft: '10px', height: '15px', padding: '0px', backgroundColor: 'transparent', color: 'red'}}><b>-</b></Button>    
                }

            </div>
        </div>
        
    )
}

export default ItemCountCart
