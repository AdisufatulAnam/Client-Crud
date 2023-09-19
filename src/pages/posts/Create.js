import { useState } from "react";
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";


function CreatePost(){

    //state
    const [title, setTitle] =useState('');
    const [content, setContent]=useState('');

    //state validation
     const [validation, setValidation]= useState({});

    //history 
     const history = useHistory();

    const storePost = async (a) =>{
        a.preventDefault();

        //send data to server
        await axios.post('http://localhost:3000/api/posts/store',{
            title: title,
            content : content
        })
        .then(()=>{
            //redirect
            history.push('/posts');
        })
        .catch((error)=> {
            //assign validation on state
            setValidation(error.response.data);
        })
    };
    return (
        <Container className="mt-3">
            <Row>
              <Col md={12}>
                    <Card className="border-o rounded shadow-sm">
                        <Card.Body>
                            {
                            validation.errors &&
                                <Alert variant="danger">
                                    <ul class="mt-0 mb-0">
                                        { validation.errors.map((error, index)=>(
                                            <li key={index}>{ `${error.param}: ${error.msg}` }</li>
                                        )) }
                                    </ul>
                                </Alert>
                            }
                            
                            <Form onSubmit={storePost}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>TITLE</Form.Label>
                                    <Form.Control type="text" value={title} onChange={(a) => setTitle(a.target.value)} placeholder="Masukan Title"></Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>CONTENT</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukan Content"></Form.Control>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    SIMPAN
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
    
}
export default CreatePost;