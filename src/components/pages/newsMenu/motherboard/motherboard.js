import React from 'react';
import '../../../../App.css';
import Navbar from '../../../../navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Cards from '../../../../cards';
import SideBar from '../newsSideBar';

function motherboard() {
    return (
        <>
        <div className='pages'>
        <Container className='sidebar_BG'>
          <Row className="sidebar_row" xs sm md lg xl={1}>
            <Col xs sm md lg xl={{ span: 3, offset: 0}}>
              <SideBar/>
              
            </Col>
            <Col xs sm md lg xl={{ span: 9, offset: 0}}>
              <div>
              <h1 >Motherboard News</h1>
                <p>Find Motherboards Here</p>
      
                <Cards />
      
      
                
      
      
              </div>
      
            </Col>
          </Row>
        </Container>
        </div>
        </>
      );
}

export default motherboard
