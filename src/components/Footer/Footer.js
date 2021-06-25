import React from 'react'
import { Container,Grid,Header,Segment } from 'semantic-ui-react'
import './Footer.css'

function Footer() {
    return (
        <Segment inverted vertical style={{ padding: '2em 0em', backgroundColor: '#0d4557', bottom: '0', left: '0', position: 'fixed', width: '100%'}}>
        <Container>
            <Grid>
                <Grid.Row centered>
            
                    <Grid.Column >
                        <Header style={{textAlign: 'center'}} as='h3' inverted>
                            Iluscuadros. Todos los derechos reservados.
                        </Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        </Segment>
    )
}

export default Footer
