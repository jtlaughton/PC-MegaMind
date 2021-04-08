
import React from 'react';
import '../../App.css';
import Navbar from '../../navbar';
import Dropdown from './partSelectionDropDown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import SubMenu from './newsMenu';

export default function news() {
return (
  <>
  <div className='pages'>
  <Container className='sidebar_BG'>
    <Row className="sidebar_row" xs sm md lg xl={1}>
      <Col xs sm md lg xl={{ span: 2, offset: 1}}>
        <SubMenu/>
      </Col>
      <Col>
        <div>
          <h1 >All News</h1>
          <p>Most recent computer part news:</p>
          <Row>
            <Col xs sm md lg xl={{ span: 4, offset: 1}}>
              <h3>Article Title</h3>
              <p>Article Summary</p>
            </Col>
            <Col xs sm md lg xl={{ span: 3, offset: 1}}>
            <Link to="/CPU">
              <button>
                <span>Learn More</span>
              </button>
            </Link>
            </Col>
          </Row>

          <Row>
            <Col xs sm md lg xl={{ span: 4, offset: 1}}>
              <h3>Article Title</h3>
              <p>Article Summary</p>
            </Col>
            <Col xs sm md lg xl={{ span: 3, offset: 1}}>
            <Link to="/CPUCooler">
              <button>
                <span>Learn More</span>
              </button>
            </Link>
            </Col>
          </Row>

          <Row>
            <Col xs sm md lg xl={{ span: 4, offset: 1}}>
              <p>Motherboard: Description Here</p>
            </Col>
            <Col xs sm md lg xl={{ span: 3, offset: 1}}>
            <Link to="/motherboard">
              <button>
                <span>Learn More</span>
              </button>
            </Link>
            </Col>
          </Row>

          <Row>
            <Col xs sm md lg xl={{ span: 4, offset: 1}}>
              <p>Memory: Description Here</p>
            </Col>
            <Col xs sm md lg xl={{ span: 3, offset: 1}}>
            <Link to="/memory">
              <button>
                <span>Learn More</span>
              </button>
            </Link>
            </Col>
          </Row>

          <Row>
            <Col xs sm md lg xl={{ span: 4, offset: 1}}>
              <p>Storage: Description Here</p>
            </Col>
            <Col xs sm md lg xl={{ span: 3, offset: 1}}>
            <Link to="/storage">
              <button>
                <span>Learn More</span>
              </button>
            </Link>
            </Col>
          </Row>

          <Row>
            <Col xs sm md lg xl={{ span: 4, offset: 1}}>
              <p>Video Card: Description Here</p>
            </Col>
            <Col xs sm md lg xl={{ span: 3, offset: 1}}>
            <Link to="/videoCard">
              <button>
                <span>Learn More</span>
              </button>
            </Link>
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
