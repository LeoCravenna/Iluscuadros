import React, {useState} from 'react'
import { Button, Card } from 'semantic-ui-react'
import './ItemCount.css'

const btnMas = {
    margin: '15px', 
    backgroundColor: 'transparent', 
    color: 'green', 
    border: '1px solid green'
}

const btnMenos = {
    margin: '15px', 
    backgroundColor: 'transparent', 
    color: 'red', 
    border: '1px solid red'
}

const btnAgregar = {
    width:'100%',
    margin: '1px 1px 5px 1px', 
    fontSize: '17px'
}

function ItemCount ({ stock, initial, onAdd, item }) {

    const [count, setCount] = useState(initial)

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
                    <Button onClick={handleCounterUp} style={btnMas}><b>+</b></Button>
                :    <Button disabled={true} style={btnMas}><b>+</b></Button>          
                }

                <p>{count}</p>

                {stock >= count && count > initial ? 
                    <Button onClick={handleCounterDown} style={btnMenos}><b>-</b></Button>
                
                :   <Button disabled={true} style={btnMenos}><b>-</b></Button>    
                }

            </div>

            <Card.Content>
                <div className='ui two buttons'>
                
                    {stock !== 0 && stock >= count && count > 0 ?
                        <Button className="ui fluid button" color='blue' style={btnAgregar} onClick={()=>onAdd(item,count)}>AGREGAR AL CARRITO</Button>

                    :   <Button className="ui fluid button" disabled={true} color='blue'>AGREGAR AL CARRITO</Button>
                    
                    }

                </div>
            </Card.Content>
 
        </div>
        
    )

}

export default ItemCount
