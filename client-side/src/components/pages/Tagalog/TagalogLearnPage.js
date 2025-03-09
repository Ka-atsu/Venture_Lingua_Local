import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TagalogSideComponent from '../../Side Panel/TagalogSideComponent';
import LearnTagalogMainContent from '../../Dialects/Tagalog/Learn Tagalog/1 Dashboard/LearnTagalogMainContent';

function TagalogLearnPage() {
    return (
            <Row>
                {/* Left sidebar */}
                <Col xs={2} className="p-0">
                    <TagalogSideComponent />
                </Col>

                {/* Main content */}
                <Col xs={10} className="p-0">
                    <LearnTagalogMainContent />
                </Col>
            </Row>
    );
}

export default TagalogLearnPage;