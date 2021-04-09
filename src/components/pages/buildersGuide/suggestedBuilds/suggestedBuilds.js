
import React from 'react';
import '../../../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from '../SideBar';
import Cards from './suggestedCards';
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
        <Col xs sm md lg xl={{ span: 10, offset: 0}}>
          <div>
            <h1 >Suggested Builds</h1>
            <p>Check out some of our suggested builds by other users:</p>
            <Row>
            <Cards/>
            </Row>



          </div>

        </Col>
      </Row>
    </Container>
    </div>
  </>

);
}
