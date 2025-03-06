import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function LoginRegisterPage() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '80%' }}>
            <Row className="w-100">
                <Col md={4} sm={12} className="mx-auto"> 
                    <div className="text-center">
                        <h1>{isLogin ? 'Login' : 'Register'}</h1>

                        {/* Login Form */}
                        {isLogin ? (
                            <Form>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                            </Form>
                        ) : (
                            // Register Form
                            <Form>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password:</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm password" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                            </Form>
                        )}

                        <Button variant="link" onClick={toggleForm}>
                            {isLogin ? 'Need an account? Register here' : 'Already have an account? Login'}
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginRegisterPage;