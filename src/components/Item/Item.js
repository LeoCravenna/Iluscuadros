import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import './Item.css'

function Item({item}) {
    return (

        <div>
            <Card>
                <Image src={item.pictureUrl} /> 

                <div className='card-title'>
                    <h2>{item.title}</h2>
                    
                </div>

                <div className='card-price'>
                    <h3>${item.price}</h3>
                </div>

                <div className='card-description'>
                    <p>{item.description}</p>
                </div>
                
                <Card.Content>

                    <div className='ui two buttons'>
                        <Button color='teal' style={{margin: '1px'}}>+ INFO</Button>
                        <Button color='blue' style={{margin: '1px'}}>LO QUIERO</Button>
                    </div>

                </Card.Content>

            </Card>    
        </div>

    )
}

export default Item