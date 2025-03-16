import React from 'react';
import DialectPickerComponent from '../DialectSelection/DialectPickerComponent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function DialectPage() {
    return (
        //  
        //  The Container component is used to center the content 
        //  and make it responsive. 
        //  - d-flex: This ensures that the container uses flexbox with a column layout, stacking the child elements vertically.
        //  - flex-column This makes it vertical.
        //  - justify-content-center: This centers the content horizontally.
        //  - align-items-center: This centers the content vertically.
        //  - style={{ minHeight: '100vh' }}: This ensures the Container takes the full height of the viewport.
        // 
        <Container className="d-flex flex-column justify-content-center align-items-center bg-dark" style={{ minHeight: '100vh', minWidth: '100vw' }}>
            <Row className="w-100">
                <h1 className="text-center">Choose a dialect</h1>
            </Row>
            <Row className="w-100">
                <DialectPickerComponent />
            </Row>
        </Container>
    );
}

export default DialectPage;