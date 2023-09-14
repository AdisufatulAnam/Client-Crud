import {Card, Container, Row, Col, Button, Form } from 'react-bootstrap'

function Home(){
    return(
        <Container className='mt-3'>
            <Row>
                <Col md={13}>
                    <Card className='border-0 rounded shadow-sm'>
                        <Card.Body className='p-4'>
                            <h1> EXPRESS.js Vue.js</h1>
                            <p class="lead">Tutorial FullStack Express.js dan React.js oleh <strong>SantriKoding.com</strong></p>
                            <Button href="http://santrikoding.com" target="_blank" variant="primary" size="lg">SELENGKAPNYA</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Home;

