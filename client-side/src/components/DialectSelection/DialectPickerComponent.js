import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; 

function DialectPickerComponent() {
    const navigate = useNavigate(); // Initialize the navigate function
    // If tagalog is clicked
    const tagalog = () => {
        navigate('/tagalog'); 
    };
    return (
        <Container className="bg-white" style={{ width: '100%', maxWidth: '600px' }}>
            <Row>
                <Col md={6} className="my-3">
                    <Card>
                        <Button variant="outline-dark" block onClick={tagalog}>
                            {/* <Card.Img variant="top" src="path_to_spanish_flag_image" /> */}
                            <Card.Body>
                                <Card.Title>Tagalog</Card.Title>
                            </Card.Body>
                        </Button>
                    </Card>
                </Col>
                <Col md={6} className="my-3">
                    <Card>
                        <Button variant="outline-dark" block>
                            <Card.Body>
                                <Card.Title>Central Bikol</Card.Title>
                            </Card.Body>
                        </Button>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6} className="my-3">
                    <Card>
                        <Button variant="outline-dark" block>
                            <Card.Body>
                                <Card.Title>Cebuano</Card.Title>
                            </Card.Body>
                        </Button>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="my-3">
                        <Button variant="outline-dark" block>
                            <Card.Body>
                                <Card.Title>Ilocano</Card.Title>
                            </Card.Body>
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DialectPickerComponent;
