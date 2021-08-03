import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Table, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Cart.css'
import '../../components/ItemCountCart/ItemCountCart.css'

//COMPONENTES
import ItemCountCart from '../../components/ItemCountCart/ItemCountCart'

const btnRemove = {
    margin: '0px', 
    padding: '5px', 
    backgroundColor: 'transparent', 
    color: 'red'
}

const btnDeleteAll = {
    margin: '15px', 
    backgroundColor: 'transparent', 
    color: 'red', 
    border: '1px solid red'
}

const btnContComprando = {
    paddingTop: '15px', 
    margin: '0px 0px 0px 0px'
}

const btnFinPedido = {
    paddingTop: '15px', 
    margin: '0px 0px 0px 10px'
}

function Cart() {
    
    const {removeItem, clear, cartItems} = useContext(CartContext);
    console.log(cartItems);
    
    return (
        <div className="cartContainer">
            <div className="content-cart-item">
                <h1>Carrito</h1>

                { cartItems.length > 0 ?
                    
                    <div>

                    {cartItems.map((item)=>{
                        return (
                
                            <div key={item.item.id}>

                                <Table color='blue' className='cart-Table'>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell className='cell-Header-Product'><b>Producto</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Title'><b>Nombre del Producto</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Category'><b>Categoría</b></Table.HeaderCell>
                                            <Table.HeaderCell className='cell-Header-Measure'><b>Medida</b></Table.HeaderCell>
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
                                                    <div className="cart-Item-Measure">80cm x 80cm</div>
                                                }
                                            </Table.Cell>    

                                            <Table.Cell>
                                                {
                                                    <div className="cart-Item-Price">${item.item.price}</div>
                                                }
                                            </Table.Cell>    

                                            <Table.Cell>
                                                {
                                                    <ItemCountCart stock={item.item.stock} initial={item.quantity} item={item.item} />
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
                                                        <Button onClick={()=>removeItem(item.item.id)} style={btnRemove}>
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
                                            <div className="contenedor-btn">
                                                <div className="contenedor-btn-continuar">    
                                                    <Link to="/">
                                                        <Button  color='orange' style={btnContComprando}>CONTINUAR COMPRANDO</Button>
                                                    </Link>
                                                </div>

                                                <div className="contenedor-btn-realizar">    
                                                    TOTAL: ${cartItems.map(obj => obj.item.price * obj.quantity).reduce((a,b)=> a + b)}
                                                    <Link to="/orderForm">
                                                        <Button color='green' style={btnFinPedido}>REALIZAR EL PEDIDO</Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        }
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>   
                        </Table>
                    
                        <Button onClick={()=>clear()} style={btnDeleteAll}>
                            <Icon name="trash alternate" className="icon-Item-Delete-All" /><b style={{fontSize:'20px'}}>Eliminar todo</b>
                        </Button>

                    </div>
                    
                :
            
                    <div>    
                        <h2>No hay ítems</h2>   

                        <Link to="/">
                            <Button  color='orange' style={{margin: '1px', marginTop: '20px'}}>SEGUIR VIENDO EL CATÁLOGO</Button>
                        </Link>
                    </div>

                }

            </div>
        </div>
        
    )
    
}

export default Cart
