import { Card, Container, Row, Col } from "react-bootstrap";

function IndexPost(){
    return (
        <Container className="mt-3">
            <Row>
                <Col md='{12}'> 
                <Card className="border-0 rounded shadow-sm">
                    <Card.Bord>
                        HALAMAN INDEX POST
                    </Card.Bord>
                </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default IndexPost;