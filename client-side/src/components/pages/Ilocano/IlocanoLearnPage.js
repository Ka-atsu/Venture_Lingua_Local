import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IlocanoSideComponent from '../../Side Panel/IlocanoSideComponent';
import LearnIlocanoMainContent from '../../Dialects/Ilocano/Learn Ilocano/1 Dashboard/LearnIlocanoMainContent';

function IlocanoLearnPage() {
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
                    <IlocanoSideComponent />
                </Col>

                {/* Main content */}
                <Col xs={10} className="p-0" style={{ marginLeft: '16.6667%' }}>
                    <LearnIlocanoMainContent />
                </Col>
            </Row>
    );
}

export default IlocanoLearnPage;