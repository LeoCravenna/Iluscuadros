import React, {useState} from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
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
                <Image src={"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/070/999/products/sw-23-clara-vertical201-e35ac961105bd55f1716221358472739-1024-1024.png"} /> 

                <div className='card-header'>
                    <h2>Star Wars</h2>
                </div>
                
                <div className='card-content'>
                    <Button onClick={handleCounterUp} style={{margin: '15px', backgroundColor: 'transparent', color: 'green', border: '1px solid green'}}><b>+</b></Button>
                    <p>{count}</p>
                    <Button onClick={handleCounterDown} style={{margin: '15px', backgroundColor: 'transparent', color: 'red', border: '1px solid red'}}><b>-</b></Button>
                </div>

                <Card.Content>

                    <div className='ui two buttons'>
                        <Button color='blue' onClick={handleCounterStock}>AGREGAR AL CARRITO</Button>
                    </div>

                </Card.Content>

            </Card>    
        </div>
    )

}

export default ItemCount
