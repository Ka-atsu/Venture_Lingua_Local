import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TagalogSideComponent from '../../Side Panel/TagalogSideComponent';
import PracticeTagalogComponent from '../../Dialects/Tagalog/Practice Tagalog/PracticeTagalogComponent';

function TagalogPracticePage() {
    return (
        <Row>
            {/* Left sidebar */}
            <Col xs={2} className="p-0">
                <TagalogSideComponent />
            </Col>

            {/* Main content */}
            <Col xs={10} className="p-0">
                <PracticeTagalogComponent />
            </Col>
        </Row>
    );
}

export default TagalogPracticePage;