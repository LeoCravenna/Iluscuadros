import React, { useState, useContext } from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'
import '../../components/ItemCount/ItemCount.css'

//COMPONENTES
import ItemCount from '../../components/ItemCount/ItemCount'

//CONTEXT
import { CartContext } from '../../CartContext/CartContext'

function ItemDetail({item}) {

    const [cantItems, setCantItems] = useState(0);
    const {addItem} = useContext(CartContext);

    const onAdd = (item,e) => {
        setCantItems(e);   
        addItem(item, e);  
    }

    return (
        <div>
            
            <Card>
                <Image src={item.pictureUrl} /> 

                <div className='card-title'>
                    <h2>{item.title}</h2>
                    
                </div>

                <div className='card-price'>
                    <h3>Precio: {item.price}</h3>
                </div>

            

                <div className='card-description'>
                    <p><b>Category:</b> {item.category}</p>
                </div>

                <div className='card-description'>
                    <p><b>Descripción:</b> {item.description}</p>
                </div>
                
                <Card.Content>

                    {
                    cantItems === 0 ? 
                        <ItemCount stock={5} initial={1} onAdd={onAdd} item={item} />
                    :   
                        <Link to={'/cart'}>
                            <Button className="ui fluid button" color="green" style={{margin: '1px 1px 5px 1px'}}>FINALIZAR COMPRA ({cantItems} unidad/es)</Button>         
                        </Link> 
                    }    

                    <Link to="/">
                        <Button className="ui fluid button" color='red' style={{margin: '1px'}}>VOLVER</Button>
                    </Link>

                </Card.Content>

            </Card>
        </div>
    )
}

export default ItemDetail
