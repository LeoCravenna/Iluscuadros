import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
//import Swal from 'sweetalert2'
import './Item.css'

function Item({item}) {
    /*const [count, setCount] = useState(0)

    const handleCounterUp = () => {
		setCount(count + 1);
	};
	const handleCounterDown = () => {
		setCount(count - 1);
	};
    const onAdd = () => {
        if(count > 0){
            Swal.fire ({
                icon: 'success',
                title: '¡Grandioso!',
                text: `Agregaste al carrito ${count} unidad/es`,
                showConfirmButton: false,
                timer: 2500
            })
        } else {
            Swal.fire ({
                icon: 'error',
                title: '¡Lo siento!',
                text: `No haz seleccionado la cantidad de unidades`,
                showConfirmButton: false,
                timer: 2500
            })
        }    
	};*/

    return (

        <div className="card-container">
            <Card>
                <Image src={item.img} className="Image" /> 

                <div className='card-title'>
                    <h2>{item.name}</h2>
                    
                </div>

                <div className='card-price'>
                    <h3>{item.nickname}</h3>
                </div>

                <div className='card-description'>
                    <p>{item.status}</p>
                </div>
                
                {/*<div className='card-content'>
                    <Button onClick={handleCounterUp} disabled={count >= 5 ? true : false} style={{margin: '15px', backgroundColor: 'transparent', color: 'green', border: '1px solid green'}}><b>+</b></Button>
                    <p>{count}</p>
                    <Button onClick={handleCounterDown} disabled={count <= 0 ? true : false} style={{margin: '15px', backgroundColor: 'transparent', color: 'red', border: '1px solid red'}}><b>-</b></Button>
                </div>*/}

                <Card.Content>

                    <Link to={`/Item/${item.char_id}`}>
                        <Button className="ui fluid button" color='teal' style={{margin: '1px'}}>MÁS INFORMACIÓN</Button>
                    </Link>

                    {/*<Button className="ui fluid button" onClick={onAdd} color='blue' style={{margin: '1px'}}>AGREGAR AL CARRITO</Button>*/}

                </Card.Content>

            </Card>    
        </div>

    )
}

export default Item