import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { FaUser, FaLock, FaRegCheckCircle } from 'react-icons/fa';

function LoginRegisterPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }
        if (!isLogin && password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        // Submit the form data for login or registration
    };

    return (
        <Container fluid
        className="d-flex justify-content-center align-items-center"
        style={{
            height: '100vh',
            background: 'linear-gradient(to right, #7a3eb0, #5e0da7)', // Gradient background
        }}>
            <Row className="w-100 justify-content-center">
                <Col md={5} sm={12}>
                    <Card className="p-5 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', border: 'none' }}>
                        <div className="text-center mb-4">
                            <h2 style={{ fontSize: '2rem', color: '#555' }}>
                                {isLogin ? 'Login' : 'Register'}
                            </h2>
                        </div>
                        {error && <Alert variant="danger" style={{ fontSize: '14px' }}>{error}</Alert>}
                        
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <div className="d-flex align-items-center">
                                <FaUser size={20} color="#5e0da7" />
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required
                                    style={{
                                        borderRadius: '30px',
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderColor: '#ddd',
                                        marginLeft: '10px',
                                    }}
                                />
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formPassword" className="mb-3">
                                <div className="d-flex align-items-center">
                                <FaLock size={20} color="#5e0da7" />
                                <Form.Control 
                                    type="password" 
                                    placeholder="Enter your password" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required
                                    style={{
                                        borderRadius: '30px',
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderColor: '#ddd',
                                        marginLeft: '10px',
                                    }}
                                />
                                </div>
                            </Form.Group>

                            {!isLogin && (
                                <Form.Group controlId="formConfirmPassword" className="mb-3">
                                    <div className="d-flex align-items-center">
                                    <FaRegCheckCircle size={20} color="#5e0da7" />
                                    <Form.Control 
                                        type="password" 
                                        placeholder="Confirm your password" 
                                        value={confirmPassword} 
                                        onChange={(e) => setConfirmPassword(e.target.value)} 
                                        required
                                        style={{
                                            borderRadius: '30px',
                                        padding: '12px',
                                        fontSize: '16px',
                                        borderColor: '#ddd',
                                        marginLeft: '10px',
                                        }}
                                    />
                                    </div>
                                </Form.Group>
                            )}

                            <Button 
                                variant="primary" 
                                type="submit" 
                                className="w-100" 
                                style={{
                                    backgroundColor: '#5e0da7',
                                    border: 'none',
                                    borderRadius: '30px',
                                    padding: '12px',
                                    fontSize: '16px',
                                    color: 'white',
                                }}
                            >
                                {isLogin ? 'Login' : 'Register'}
                            </Button>

                            <div className="text-center mt-3">
                                <Button 
                                    variant="link" 
                                    onClick={toggleForm} 
                                    style={{ color: '#5e0da7', fontSize: '14px', background: 'transparent', border: 'none' }}
                                >
                                    {isLogin ? 'Need an account? Register here' : 'Already have an account? Login'}
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginRegisterPage;