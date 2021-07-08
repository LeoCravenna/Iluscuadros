import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Cart.css'
import '../../components/ItemCountCart/ItemCountCart.css'

//COMPONENTES
import ItemCountCart from '../../components/ItemCountCart/ItemCountCart'

function Cart() {
    
    const {removeItem, clear, cartItems} = useContext(CartContext);

    /*const onAdd = (item,e) => {
        //setCantItems(e);   
        addItem(item, e);  
    }*/

    return (
        <div className="cartContainer">
            <div className="content-cart-item">
                <h1>Carrito</h1>

                { cartItems.length > 0 ?

                    <div>

                    {cartItems.map((item)=>{
                        return (
                
                            <div key={item.item.id_cuadro}>

                                <Table color='blue' className='cart-Table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className='cell-Header-Product'><b>Producto</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Title'><b>Nombre del Producto</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Category'><b>Categoría</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Price'><b>Precio x unid.</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Quantity'><b>Cantidad</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Subtotal'><b>Subtotal</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Action'><b>Acción</b></Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>
                                            <Table.Cell>
                                                {
                                                    <img src={item.item.pictureUrl} alt={item.item.title} className="cart-Item-Image"/>
                                                }
                                            </Table.Cell>

                                            <Table.Cell>
                                                {
                                                    <div className="cart-Item-Title">{item.item.title}</div>
                                                }
                                            </Table.Cell>

                                            <Table.Cell>
                                                { item.item.category === 'music' ?
                                                    <div className="cart-Item-Category">Música</div>
                                                : item.item.category === 'movie' ?
                                                    <div className="cart-Item-Category">Películas</div> 
                                                : 
                                                    <div className="cart-Item-Category">Deportes</div>       
                                                }
                                            </Table.Cell>

                                            <Table.Cell>
                                                {
                                                    <div className="cart-Item-Price">${item.item.price}</div>
                                                }
                                            </Table.Cell>    

                                            <Table.Cell>
                                                {
                                                    <ItemCountCart stock={item.item.stock} initial={item.quantity} />
                                                }
                                            </Table.Cell>
                                            
                                            <Table.Cell>
                                                {
                                                    <div className="cart-Item-Subtotal">${item.quantity * item.item.price}</div>
                                                }
                                            </Table.Cell>         

                                            <Table.Cell>
                                                {
                                                    <div className="container-Btn-Remove">
                                                        <Button onClick={()=>removeItem(item.item.id_cuadro)} style={{margin: '0px', padding: '5px', backgroundColor: 'transparent', color: 'red'}}>
                                                            <Icon name="trash alternate" className="icon-Item-Delete" />
                                                        </Button>
                                                    </div>
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    </Table.Body>
                                </Table>

                            </div>

                        )            
                    })
                    
                    
                    }

                        <Table color='green' className='cart-Table'>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell className='cell-Header-Total'>
                                        {
                                            <div>TOTAL: ${cartItems.map(obj => obj.item.price * obj.quantity).reduce((a,b)=> a + b)}
                                                <Link to="/">
                                                    <Button  color='green' style={{paddingTop: '15px', margin: '0px 0px 0px 10px'}}>PAGAR</Button>
                                                </Link>
                                            </div>
                                        }
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            
                        </Table>
                    
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
