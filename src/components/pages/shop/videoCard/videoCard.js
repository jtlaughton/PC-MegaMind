import React from 'react';
import '../../../../App.css';
import Cards from './videoCardCards';
import SideBar from '../shopSideBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'

var Elem;

export default function shop() {
return (
  <>
    <div className='pages'>
    <Container className='sidebar_BG' fluid='md'>
      <Row className="sidebar_row" xs sm md lg xl={1}>
        <Col xs sm md lg xl={{ span: 2, offset: 0}}>
          <SideBar/>
        </Col>
        <Col xs sm md lg xl={{ span: 9, offset: 0}}>
          <h1 >Graphic Cards</h1>
          <Row className="sidebar_row" xs sm md lg xl={1} id = "filterRoot">
            <Cards/>
          </Row>
          
        </Col>
      </Row>
  </Container>
  </div>
    
  </>
);
}
