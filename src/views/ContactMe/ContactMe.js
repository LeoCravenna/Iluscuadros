import React from 'react'
import { Container, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './ContactMe.css'

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

function ContactMe() {

    const inquiries = db.collection("consultas");

    const formik = useFormik({
        initialValues: {
            firstName: '',
            email: '',
            phone: '',
            inquirie: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Debe ingresar un nombre"),
            email: Yup.string().email("No es un correo válido").required("Debe ingresar un correo electrónico"),
            phone: Yup.string().min(8, 'Muy corto!').max(20, 'Muy largo!').required("Debe ingresar un teléfono"),
            inquirie: Yup.string().min(50, 'Muy corta! No parece ser una consulta').max(300, 'Disculpa, pero te haz excedido de caracteres en tu consulta!').required("Debe escribir una consulta"),
        }),
        onSubmit: (formData, { resetForm }) => {
  
            const newInquirie = {
                buyer: formData,
                date: firebase.firestore.Timestamp.fromDate(new Date()),
            }

            inquiries.add(newInquirie).then(() => {
                console.log("Se agregó correctamente");

                Swal.fire ({
                    icon: 'success',
                    title: '¡Muchas gracias!',
                    showConfirmButton: true,
                    html:`<h3>Su consulta ya ha sido guardada en nuestro sistema </br>En breve nos comunicaremos con usted para responderle!</h3>`,
                })

                resetForm();

            }).catch(() => {
                console.log("Hubo un error con el envio de la consulta");

                Swal.fire ({
                    icon: 'error',
                    title: '¡Lo siento!',
                    text: `Hubo un error con el envio de la consulta, por favor vuelva a intentarlo en unos minutos`,
                    showConfirmButton: false,
                    timer: 2500
                })
               
            })

        },
    })

    return (

            <div>
        
                <Container className='formContainer2'>
                            
                    <h1>Contactarme</h1>
                    <h3 style={{margin: '0px'}}>Escribame su consulta y en breve me comunicaré con usted</h3>
                
                    <Form className='form2' onSubmit={formik.handleSubmit}>
                    
                        <Form.Input 
                            label='Nombre'
                            name='firstName' 
                            type='text' 
                            className='inputForm2' 
                            placeholder='Por favor ingrese su nombre...' 
                            onChange={formik.handleChange} 
                            error={formik.errors.firstName} 
                            value={formik.values.firstName}
                        />
                        <Form.Input 
                            label='E-mail'
                            name='email' 
                            type='text' 
                            className='inputForm2' 
                            placeholder='Por favor ingrese un correo electrónico' 
                            onChange={formik.handleChange} 
                            error={formik.errors.email}
                            value={formik.values.email} 
                        />
                        <Form.Input 
                            label='Teléfono'
                            name='phone' 
                            type='text' 
                            className='inputForm2' 
                            placeholder='Por favor ingrese un teléfono' 
                            onChange={formik.handleChange} 
                            error={formik.errors.phone}
                            value={formik.values.phone} 
                        />
                        <Form.TextArea
                            label='Consulta'
                            name='inquirie' 
                            type='text' 
                            className='textareaForm' 
                            placeholder='Aquí puede escribir su consulta (mínimo 50 caracteres - máximo 300 caracteres)'
                            onChange={formik.handleChange} 
                            error={formik.errors.inquirie}
                            value={formik.values.inquirie}
                        />
                        
                        <div>
                            <Link to="/">
                                <Button color='orange' style={{paddingTop: '15px', margin: '30px 0px 0px 10px'}}>VOLVER Al CATÁLOGO</Button>
                            </Link>

                            <Button type='submit' color='green' style={{paddingTop: '15px', margin: '30px 0px 0px 10px'}}>ENVIAR CONSULTA</Button>
                        </div>
                        
                    </Form>

                </Container>
                    
            </div> 
        
    )
}

export default ContactMe
