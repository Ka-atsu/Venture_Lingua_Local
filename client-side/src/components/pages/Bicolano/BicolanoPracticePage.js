import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BicolanoSideComponent from '../../Side Panel/BicolanoSideComponent';
import BicolanoTopComponent from '../../Top Panel/BicolanoTopComponent';
import PracticeBicolanoMainContent from '../../Dialects/Bicolano/Practice Bicolano/1 Dashboard/PracticeBicolanoMainContent';

function BicolanoPracticePage() {
    const [screenSize, setScreenSize] = useState('small');
    
    // Handle window resizing and set the screen size
    const handleResize = () => {
    if (window.innerWidth < 770) {
        setScreenSize('small');
    } else if (window.innerWidth >= 770 && window.innerWidth < 992) {
        setScreenSize('medium');
    } else {
        setScreenSize('large');
    }
    };

    useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize); 
    }, []);

    let marginTop = '0';
    let marginLeft = '0';

    if (screenSize === 'small') {
    marginTop = '10vh';
    marginLeft = '0';
    } else if (screenSize === 'medium') {
    marginTop = '0';
    marginLeft = '33%';
    } else if (screenSize === 'large') {
    marginTop = '0';
    marginLeft = '16.6667%';
    }
    
    return (
    <Row>
        {/* Left sidebar */}
        {screenSize === 'small' && (
          <Col
            xs={12}
            className="p-0"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              height: '10vh',
              backgroundColor: '#f8f9fa',
              zIndex: 9999,
            }}
          >
            <BicolanoTopComponent />
          </Col>
        )}
  
        {screenSize === 'medium' && (
          <Col
            xs={12}
            sm={4}
            className="p-0 position-fixed"
            style={{
              top: 0,
              left: 0,
              height: '100vh',
              overflowY: 'auto',
              backgroundColor: '#f8f9fa',
              zIndex: 9999,
            }}
          >
            <BicolanoSideComponent />
          </Col>
        )}
  
        {screenSize === 'large' && (
          <Col
            xs={12}
            sm={4}
            md={3}
            lg={2}
            className="p-0 position-fixed"
            style={{
              top: 0,
              left: 0,
              height: '100vh',
              overflowY: 'auto',
              backgroundColor: '#f8f9fa',
              zIndex: 9999,
            }}
          >
            <BicolanoSideComponent />
          </Col>
        )}
  
        {/* Main content */}
        <Col
          xs={12}
          sm={12}
          md={8}
          lg={10}
          className="p-0"
          style={{
            marginTop: marginTop,
            marginLeft: marginLeft, 
          }}
        >
          <PracticeBicolanoMainContent />
        </Col>
    </Row>
    );
}

export default BicolanoPracticePage;
