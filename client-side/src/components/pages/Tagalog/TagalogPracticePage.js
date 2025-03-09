import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TagalogSideComponent from '../../Side Panel/TagalogSideComponent';
import PracticeTagalogMainContent from '../../Dialects/Tagalog/Practice Tagalog/1 Dashboard/PracticeTagalogMainContent';

function TagalogPracticePage() {
    return (
        <Row>
            {/* Left sidebar */}
            <Col xs={2} className="p-0">
                <TagalogSideComponent />
            </Col>

            {/* Main content */}
            <Col xs={10} className="p-0">
                <PracticeTagalogMainContent />
            </Col>
        </Row>
    );
}

export default TagalogPracticePage;