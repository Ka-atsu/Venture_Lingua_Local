import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CebuanoSideComponent from '../../Side Panel/CebuanoSideComponent';
import LearnCebuanoMainContent from '../../Dialects/Cebuano/Learn Cebuano/1 Dashboard/LearnCebuanoMainContent';

function CebuanoLearnPage() {
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
                    <CebuanoSideComponent />
                </Col>

                {/* Main content */}
                <Col xs={10} className="p-0" style={{ marginLeft: '16.6667%' }}>
                    <LearnCebuanoMainContent />
                </Col>
            </Row>
    );
}

export default CebuanoLearnPage;