import React, { useState, useContext } from 'react'
import { Button, Card, Image, Item, Reveal, Icon } from 'semantic-ui-react'
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
            <Item.Group>
                <Item>

                    <Card>
                         
                        <Reveal animated='move up' instant>
                            <Reveal.Content visible>
                                <Image src={item.pictureUrl} size="large" className="Image" /> 
                            </Reveal.Content>
                            <Reveal.Content hidden>
                                <Image src={item.pictureUrl2} size="large" className="Image2" />
                            </Reveal.Content>
                        </Reveal>
            
                        <div className='card-price'>
                            <h2>Precio: ${item.price}</h2>
                        </div>

                        <div className='card-stock'>
                            <Item.Extra>
                                <Icon color='green' name='check' />Stock disponible: <b>{item.stock} unidades</b>
                            </Item.Extra>
                        </div>

                        <Card.Content>

                            {
                            cantItems === 0 ? 
                                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} item={item} />
                            :   
                                <Link to={'/cart'}>
                                    <Button className="ui fluid button" color="green" style={{margin: '1px 1px 5px 1px', fontSize: '17px'}}>{cantItems} unidad/es agregada/s <p style={{marginTop: '7px'}}>IR AL CARRITO</p></Button>         
                                </Link> 
                            }    

                            <Link to="/">
                                <Button className="ui fluid button" color='orange' style={{margin: '1px'}}>VOLVER AL CATÁLOGO</Button>
                            </Link>

                        </Card.Content>

                    </Card>

                    <Item.Content style={{width: '400px',textAlign: 'left', marginLeft: '20px', marginTop: '10px'}}>
                        <Item.Header><b style={{fontSize: '25px'}}>{item.title}</b></Item.Header>
                        <Item.Meta>
                            {
                            item.category === 'music'?
                                <span>Categoría: <b>Música</b></span>

                            : item.category === 'movie'?
                                <span>Categoría: <b>Películas</b></span>
                                
                            :
                                <span>Categoría: <b>Deportes</b></span>
                                 
                            }
                        </Item.Meta>
                        <Item.Description style={{marginTop: '20px', textAlign: 'justify' }}>
                            <p style={{marginBottom: '5px'}}>Descripción:</p>
                            {item.description}
                        </Item.Description>

                        <Item.Description style={{marginTop: '20px', textAlign: 'justify'}}>
                            <h3 style={{marginBottom: '5px'}}>Somos ILUS CUADROS</h3>
                            <p>Cuadros impresos en tela Canvas de alta calidad con impresora latex.</p>
                            <p>Montados sobre bastidores de madera pino (2,8 cm de ancho) de excelente terminación.</p>
                            <p>Listos para colgar!</p>
                            <h3>Única medida disponible: 80cm x 80cm</h3>
                            
                        </Item.Description>    

                    </Item.Content>
                </Item>
            </Item.Group>
        </div>
    )
}

export default ItemDetail
