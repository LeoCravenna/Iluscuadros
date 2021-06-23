import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({item}) {
    return (

        <div>
            <Card>
                <Image src={item.img} /> 

                <div className='card-title'>
                    <h2>{item.name}</h2>
                    
                </div>

                <div className='card-price'>
                    <h3>{item.nickname}</h3>
                </div>

                <div className='card-description'>
                    <p>{item.status}</p>
                </div>
                
                <Card.Content>

                    <div className='ui two buttons'>

                        <Link to={`/Item/${item.char_id}`}>
                            <Button color='teal' style={{margin: '1px'}}>+ INFO</Button>
                        </Link>
                    
                        <Button color='blue' style={{margin: '1px'}}>LO QUIERO</Button>

                    </div>

                </Card.Content>

            </Card>    
        </div>

    )
}

export default Item