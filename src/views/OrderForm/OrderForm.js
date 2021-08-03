import React, { useContext } from 'react'
import { CartContext } from '../../CartContext/CartContext'
import { Container, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './OrderForm.css'

//SWEETALERT2
import Swal from 'sweetalert2'

//FORMIK - Lo utilizo para manejar los datos del Form
import { useFormik } from 'formik'

//YUP - Lo utilizo para crear validaciones dentro de Formik en el Form
import * as Yup from 'yup'

//FIREBASE
import firebase from 'firebase/app'
import 'firebase/firestore'
import { db } from '../../Firebase/Firebase'

function OrderForm() {

    const {clear, cartItems} = useContext(CartContext);

    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++ ) {
        totalPrice += cartItems[i].item.price * cartItems[i].quantity;
    }
     
    const orders = db.collection("pedidos");

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Debe ingresar un nombre"),
            lastName: Yup.string().required("Debe ingresar un apellido"),
            email: Yup.string().email("No es un correo válido").required("Debe ingresar un correo electrónico"),
            phone: Yup.string().min(8, 'Muy corto!').max(20, 'Muy largo!').required("Debe ingresar un teléfono"),
        }),
        onSubmit: (formData) => {
            const newOrder = {
                buyer: formData,
                items: cartItems,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                price: cartItems.map(obj => obj.item.price * obj.quantity).reduce((a,b)=> a + b), 
            }

            orders.add(newOrder).then(({id}) => {
                console.log("Se agregó correctamente");

                Swal.fire ({
                    icon: 'success',
                    title: '¡Muchas gracias!',
                    showConfirmButton: true,
                    html:`<h3>El código de Orden para tu pedido es:</br> <b>${id}</b></h3>`,
                })

                clear();

            }).catch(() => {
                console.log("Hubo un error en la carga del pedido");

                Swal.fire ({
                    icon: 'error',
                    title: '¡Lo siento!',
                    text: `Hubo un error en la carga del pedido, por favor vuelva a intentarlo en unos minutos`,
                    showConfirmButton: false,
                    timer: 2500
                })
                
            })

        },
    })

    return (
        <div>
        
        { cartItems.length > 0 ?

            <div>
        
                <Container className='formContainer'>
                            
                    <h1>Registro para confirmar la orden</h1>

                    <Form className='form' onSubmit={formik.handleSubmit}>
                        
                        <Form.Input 
                            label='Nombre'
                            name='firstName' 
                            type='text' 
                            className='inputForm' 
                            placeholder='Por favor ingrese su nombre...' 
                            onChange={formik.handleChange} 
                            error={formik.errors.firstName} 
                            value={formik.values.firstName}
                        />
                        <Form.Input 
                            label='Apellido'
                            name='lastName' 
                            type='text' 
                            className='inputForm'
                            placeholder='Por favor ingrese su apellido...' 
                            onChange={formik.handleChange} 
                            error={formik.errors.lastName} 
                            value={formik.values.lastName}
                        />
                        <Form.Input 
                            label='E-mail'
                            name='email' 
                            type='text' 
                            className='inputForm' 
                            placeholder='Por favor ingrese un correo electrónico' 
                            onChange={formik.handleChange} 
                            error={formik.errors.email}
                            value={formik.values.email} 
                        />
                        <Form.Input 
                            label='Teléfono'
                            name='phone' 
                            type='text' 
                            className='inputForm' 
                            placeholder='Por favor ingrese un teléfono' 
                            onChange={formik.handleChange} 
                            error={formik.errors.phone}
                            value={formik.values.phone} 
                        />

                        <div className="container-totalPrice">
                            <h4>Precio Final a Abonar</h4>
                            <h3>${totalPrice}</h3>
                        </div>

                        <div>
                            <Link to="/cart">
                                <Button color='orange' style={{paddingTop: '15px', margin: '30px 0px 0px 10px'}}>VOLVER Al CARRITO</Button>
                            </Link>

                            <Button type='submit' color='green' style={{paddingTop: '15px', margin: '30px 0px 0px 10px'}}>FINALIZAR EL PEDIDO</Button>
                        </div>

                    </Form>

                </Container>
                    
            </div> 
        
        :
        
            <div className='noItemsInContainer'>    
                <h2>No hay ítems</h2>   

                <Link to="/">
                    <Button color='orange' style={{margin: '1px', marginTop: '20px'}}>CONTINUAR COMPRANDO</Button>
                </Link>
            </div>
        }

        </div>    
    )        
}

export default OrderForm
