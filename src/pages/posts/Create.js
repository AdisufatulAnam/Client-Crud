import { Card, Container, Row, Col } from "react-bootstrap";

import { useState } from "react";
import { Card, Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";


function CreatePost(){

    //state
    const [title, setTitle] =useState('');
    const [content, setContent]=useState('');

    //state validation
    const [validasi, setValidation]= useState({});

    //history 
    const history = useHistory();

    const storePost = async (a) =>{
        a.prevent
    }
    return (
        <Container className="mt-3">
            <Row>
                <Col md='{12}'>
                    <Card className="border-o rounded shadow-sm">
                        <Card.Body>
                            HALAMAN CREATE POST
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
    
}
export default CreatePost;