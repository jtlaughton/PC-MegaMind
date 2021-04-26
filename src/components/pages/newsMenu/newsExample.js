import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideBar from './newsSideBar';



export default function newsExample() {
    return (
        <>
        <div className='pages'>
        <Container className='sidebar_BG' fluid="md">
    <Row className="sidebar_row" xs sm md lg xl={1}>
      <Col xs sm md lg xl={{ span: 3, offset: 0}}>
        <SideBar/>
        
      </Col>
      <Col xs sm md lg xl={{ span: 8, offset: 0}}>
        <div>
          <h1 >Example News Article Webpage</h1>
          <p> This an example page for articles. The article link you press actually takes you to the website of the article. </p>
          </div>

      </Col>
    </Row>
  </Container>

        </div>
        </>
    );
}
