import React from 'react'
import { Button, Card, Image, Reveal } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import './Item.css'

function Item({item}) {
    return (

        <div className="card-container">
            <Card>
                <Reveal animated='move up' instant>
                    <Reveal.Content visible>
                        <Image src={item.pictureUrl} size="large" className="Image" /> 
                    </Reveal.Content>
                    <Reveal.Content hidden>
                        <Image src={item.pictureUrl2} size="large" className="Image2" />
                    </Reveal.Content>
                </Reveal>


                <div className='card-title'>
                    <h2>{item.title}</h2>
                </div>

                <div className='card-description'>
                    {
                    item.category === 'music'?
                        <h3>Música</h3>
                    : item.category === 'movie'?
                        <h3> Películas</h3>
                    :
                        <h3>Deportes</h3>    
                    }
                    
                </div>

                <Card.Content>

                    <Link to={`/Item/${item.id}`}>
                        <Button className="ui fluid button" color='teal' style={{margin: '1px'}}>MÁS INFORMACIÓN</Button>
                    </Link>

                </Card.Content>

            </Card>    
        </div>

    )
}

export default Item