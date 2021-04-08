import React from 'react';
import '../../../../App.css';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import SideBar from '../SideBar';

export default function cpu() {
    return (
        <>
            <h1 className="buildersHeader">CPU</h1>
            <Link to="/buildersGuide">
              <button>
                <span>Go Back</span>
              </button>
            </Link>
      <div className='pages'>
        <Container className='sidebar_BG'>
          <Row className="sidebar_row" xs sm md lg xl={1}>
            <Col xs sm md lg xl={{ span: 2, offset: 0}}>
              <SideBar/>
            </Col>
          <Col>
          </Col>
          </Row>
          </Container>
          </div>
          <div>
          </div>
        </>
    );
}
