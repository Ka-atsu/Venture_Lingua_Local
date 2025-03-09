import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TagalogSideComponent from '../../Side Panel/TagalogSideComponent';
import LearnTagalogMainContent from '../../Dialects/Tagalog/Learn Tagalog/1 Dashboard/LearnTagalogMainContent';

function TagalogLearnPage() {
    return (
            <Row>
                {/* Left sidebar */}
                <Col xs={2}className="p-0 position-fixed"
                    style={{
                    top: 0,
                    left: 0,
                    height: '100vh', // Make the side component 100% of the viewport height
                    overflowY: 'auto', // Allow scrolling if content exceeds viewport height
                }}>
                    <TagalogSideComponent />
                </Col>

                {/* Main content */}
                <Col xs={10} className="p-0" style={{ marginLeft: '16.6667%' }}>
                    <LearnTagalogMainContent />
                </Col>
            </Row>
    );
}

export default TagalogLearnPage;