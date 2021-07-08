import React from 'react'
import { Container,Grid,Header,Segment } from 'semantic-ui-react'
import './Footer.css'

function Footer() {
    return (

        <Segment inverted vertical style={{ padding: '2em 0em', backgroundColor: '#0d4557', position: 'relative', bottom: '0px', width: '100%'}}>
        <Container>
            <Grid>
                <Grid.Row centered>
                
                    <Grid.Column >
                        <Header style={{textAlign: 'center'}} as='h3' inverted>
                        &copy; Copyright: Iluscuadros. Todos los derechos reservados.
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </Segment>
    )
}

export default Footer
