import { Card,Container, Row, Col } from "react-bootstrap";

function EditPost(){
    return(
        <Container className="mt-3">
            <Row>
                <Col md="{12}">
                    <Card className="border-0 rounded shadow-sm">
                        <Card.Body>
                            HALAMAN EDIT
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )

}
export default EditPost;