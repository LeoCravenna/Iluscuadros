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

    const {cartItems} = useContext(CartContext);

    const totalPrice = "$"+cartItems.map(obj => obj.item.price * obj.quantity).reduce((a,b)=> a + b);
     
    const orders = db.collection("pedidos");

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            direction: '',
            cp: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Debe ingresar un nombre"),
            lastName: Yup.string().required("Debe ingresar un apellido"),
            email: Yup.string().email("No es un correo válido").required("Debe ingresar un correo electrónico"),
            phone: Yup.string().required("Debe ingresar un teléfono"),
            city: Yup.string().required("Debe ingresar una localidad"),
            direction: Yup.string().required("Debe ingresar una dirección"),
            cp: Yup.string().required("Debe ingresar un código postal"),
        }),
        onSubmit: (formData) => {
            //console.log(formData);
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
                    title: '¡Grandioso!',
                    //text: `El número de Orden para tu pedido es: ${id}`,
                    showConfirmButton: true,
                    html:`<h3>El número de Orden para tu pedido es:</br> <b>${id}</b></h3>`,
                    /*html:<div><Link to="/cart">
                            <Label key='medium' size='medium'>{`El número de Orden para tu pedido es: ${id}`}</Label>
                            <Button color='red' style={{margin: '1px', marginTop: '20px'}}>FINALIZAR</Button>
                         </Link></div>,*/
                    //timer: 2500
                })
            }).catch(err => {
                console.log("Hubo un error en la carga");
               // setError(err);
            }).finally(() => {
                console.log("nada");
                //setLoading(false);
            });

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
                        <Form.Input 
                            label='Localidad'
                            name='city' 
                            type='text' 
                            className='inputForm' 
                            placeholder='Por favor ingrese una localidad' 
                            onChange={formik.handleChange} 
                            error={formik.errors.city} 
                            value={formik.values.city}
                        />
                        <Form.Input 
                            label='Domicilio'
                            name='direction' 
                            type='text' 
                            className='inputForm' 
                            placeholder='Por favor ingrese una dirección' 
                            onChange={formik.handleChange} 
                            error={formik.errors.direction}
                            value={formik.values.direction} 
                        />
                        <Form.Input 
                            label='Código Postal'
                            name='cp' 
                            type='text' 
                            className='inputForm' 
                            placeholder='Por favor ingrese un código postal' 
                            onChange={formik.handleChange} 
                            error={formik.errors.cp} 
                            value={formik.values.cp}
                        />
                        <Form.Input 
                            label='Precio Final a Abonar'
                            name='totalPrice' 
                            type='text' 
                            className='inputFormTotalPrice' 
                            value={totalPrice}
                        />

                        <Button type='submit' color='green' style={{paddingTop: '15px', margin: '30px 0px 0px 10px'}}>FINALIZAR EL PEDIDO</Button>
                        
                    </Form>

                </Container>
                    
            </div> 
        
        :
        
            <div className='noItemsInContainer'>    
                <h2>No hay ítems</h2>   

                <Link to="/cart">
                    <Button  color='red' style={{margin: '1px', marginTop: '20px'}}>VOLVER AL CARRITO</Button>
                </Link>
            </div>
        }

        </div>    
    )        
}

export default OrderForm
