
import React from 'react';
import '../../../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './SideBarSuggested';
//import SubMenu from '../../buildersGuideMenu';



export default function suggestedBuilds() {
return (
  <>
    <div className='pages'>
    <Container className='sidebar_BG'>
      <Row className="sidebar_row" xs sm md lg xl={1}>
        <Col xs sm md lg xl={{ span: 2, offset: 0}}>
          <SideBar></SideBar>
        </Col> 
        <Col>
          <div>
            <h1 >Suggested Builds</h1>
            <p>Check out some of our suggested builds by other users:</p>
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

            

          </div>

        </Col>
      </Row>
    </Container>
    </div>
  </>

);
}
