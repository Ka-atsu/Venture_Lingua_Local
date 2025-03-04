import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BasicWordsQuizTagalog from '../Dialects/Tagalog/BasicWordsQuizTagalog';

function TagalogPage() {
    return (
        <Container className="vh-100 d-flex justify-content-center align-items-center">
            <Row className="w-100">
                <Col>
                    <BasicWordsQuizTagalog />
                </Col>
            </Row>
        </Container>
    );
}

export default TagalogPage;