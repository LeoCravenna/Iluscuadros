import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './ItemDetail.css'

function ItemDetail({item}) {
    return (
        <div>
            
            <Card>
                <Image src={item.img} /> 

                <div className='card-title'>
                    <h2>{item.name}</h2>
                    
                </div>

                <div className='card-price'>
                    <h3>Nickname: {item.nickname}</h3>
                </div>

                <div className='card-description'>
                    <p><b>Birthday:</b> {item.birthday}</p>
                </div>

                <div className='card-description'>
                    <p><b>Occupation:</b> {item.occupation}</p>
                </div>

                <div className='card-description'>
                    <p><b>Category:</b> {item.category}</p>
                </div>

                <div className='card-description'>
                    <p><b>Status:</b> {item.status}</p>
                </div>
                
                <Card.Content>

                        <Link to="/">
                            <Button className="ui fluid button" color='red' style={{margin: '1px'}}>VOLVER</Button>
                        </Link>

                </Card.Content>

            </Card>
        </div>
    )
}

export default ItemDetail
