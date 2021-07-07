import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Cart.css'
import '../../components/ItemCount/ItemCount.css'

//COMPONENTES
import ItemCount from '../../components/ItemCount/ItemCount'

function Cart() {
    
    const {addItem, removeItem, clear, cartItems} = useContext(CartContext);

    const onAdd = (item,e) => {
        //setCantItems(e);   
        addItem(item, e);  
    }

    return (
        <div className="cartContainer">
            <div className="content-cart-item">
                <h1>Carrito</h1>

                { cartItems.length > 0 ?

                    <div>

                    {cartItems.map((item)=>{
                        return (
                
                            <div key={item.item.char_id}>

                                <Table color='blue' className='cart-Table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className='cell-Header-Product'>Producto</Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Quantity'>Cantidad</Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Action'>Acción</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                {
                                                    <img src={item.item.img} alt={item.item.name} className="cart-Item-Image"/>
                                                }
                                                {
                                                    item.item.name
                                                }
                                            </Table.Cell>

                                            <Table.Cell>
                                                {
                                                    <ItemCount stock={5} initial={item.quantity} onAdd={onAdd} item={item} />
                                                }
                                            </Table.Cell>

                                            <Table.Cell>
                                                {
                                                    <Button onClick={()=>removeItem(item.item.char_id)} style={{margin: '15px', backgroundColor: 'transparent', color: 'red'}}>
                                                        <Icon name="trash alternate" className="icon-Item-Delete" />
                                                    </Button>
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>
                    
                            </div>

                        )            
                    })
                    
                    
                    }
                    
                    
                        <Button onClick={()=>clear()} style={{margin: '15px', backgroundColor: 'transparent', color: 'red', border: '1px solid red'}}>
                            <Icon name="trash alternate" className="icon-Item-Delete-All" /><b style={{fontSize:'20px'}}>Eliminar todo</b>
                        </Button>

                    </div>
                :
            
                    <div>    
                        <h2>No hay ítems</h2>   

                        <Link to="/">
                            <Button  color='red' style={{margin: '1px', marginTop: '20px'}}>SEGUIR VIENDO EL CATÁLOGO</Button>
                        </Link>
                    </div>

                }

            </div>
        </div>
        
    )
    
}

export default Cart
