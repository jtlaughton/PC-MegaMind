
import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubMenu from './buildersGuideMenu';
//import SubMenu from '../../buildersGuideMenu';

var enabled = false;

function spawnMenu(){
  enabled = !enabled;
  
}

export default function buildersGuide() {
return (
  <>
    <div className='pages'>
    <h1 className='buildersHeader'>Builder Guide</h1>
    <Container className='sidebar_BG'>
      <Row className="sidebar_row" xs sm md lg xl={1}>
        <Col xs sm md lg xl={{ span: 1, offset: 1}}>
          <SubMenu/>  
        </Col> 
        <Col>
          <div>
            <h1 >Overview</h1>
            <p>A PC contains the following components:</p>
            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>CPU: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>CPU Cooler: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Motherboard: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Memory: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Storage: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Video Card: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Case: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Power Supply: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Operating System: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Optical Drive: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <button className='homeButton' >
                  Learn More
                </button>
              </Col>
            </Row>

          </div>

        </Col>
      </Row>
      {/* <Row className="sidebar_row" xs sm md lg xl={1}> 
        <Col  xs sm md lg xl={{ span: 1, offset: 1}}>Suggested Builds</Col> 
      </Row>
      <Row className="sidebar_row" xs sm md lg xl={1} onClick = {spawnMenu}>
        <Col  xs sm md lg xl={{ span: 1, offset: 1}}>Part Selection</Col> 
      </Row> */}
      {/* <Row className="sidebar_row" xs sm md lg xl={1} id = "subMenu">
        <Col xs sm md lg xl={{span: 1, offset: 1}}>
            <SubMenu/>
        </Col>
      </Row> */}
    </Container>
    </div>
  </>

);
}
