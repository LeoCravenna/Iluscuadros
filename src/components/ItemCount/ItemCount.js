import React, {useState} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import cuadro from '../../cuadro_ejemplo.jpg'
import './ItemCount.css'

function ItemCount ({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)
    const [countStock, setCountStock] = useState(stock)

    const handleCounterUp = () => {
        if(stock > count){
            setCount(count + 1);
            //setCountStock(countStock -1);
        }
    }

    const handleCounterDown = () => {
        if(stock >= count && count > initial){
            setCount(count - 1);
            //setCountStock(countStock + 1);
        }
    }

    const handleCounterStock = () => {
        if(countStock !== 0 && countStock >= count && count > 0){
            onAdd(count);
            setCountStock(countStock - count);
        }
    }

    //onClick={() => setCount(count + 1)}
    //onClick={()=>onAdd(count)}

    return (
        <div className='container'>
            <Card>
                <Image src={cuadro} /> 

                <div className='card-header'>
                    <h2>La Gioconda</h2>
                </div>
                
                <div className='card-content'>
                    <Button onClick={handleCounterUp} style={{margin: '15px', backgroundColor: 'transparent', color: 'green', border: '1px solid green'}}><b>+</b></Button>
                    <p>{count}</p>
                    <Button onClick={handleCounterDown} style={{margin: '15px', backgroundColor: 'transparent', color: 'red', border: '1px solid red'}}><b>-</b></Button>
                </div>

                <Card.Content>

                    <div className='ui two buttons'>
                        <Button basic color='blue' onClick={handleCounterStock}>Agregar al carrito</Button>
                    </div>

                </Card.Content>

            </Card>    
        </div>
    )

}

export default ItemCount
