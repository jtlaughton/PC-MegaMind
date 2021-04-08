
import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

//import cpu from '../parts/cpu';
//import SubMenu from '../../buildersGuideMenu';

var enabled = false;

function spawnMenu(){
  enabled = !enabled;

}

function goTo()
{
  alert("GoTo horni jail bonk");
}

export default function buildersGuide() {
return (
  <>
    <div className='pages'>
    <Container className='sidebar_BG'>
      <Row className="sidebar_row" xs sm md lg xl={1}>
        <Col xs sm md lg xl={{ span: 2, offset: 0}}>
        <SideBar/>
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
              <Link to="/CPU">
                <button>
                  <span>Learn More</span>
                </button>
              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>CPU Cooler: Description Here</p>
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

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Case: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <Link to="/case">
                <button>
                  <span>Learn More</span>
                </button>
              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Power Supply: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <Link to="/powerSupply">
                <button>
                  <span>Learn More</span>
                </button>
              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Operating System: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <Link to="/operatingSystem">
                <button>
                  <span>Learn More</span>
                </button>
              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p>Optical Drive: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 1}}>
              <Link to="/CPU">
                <button>
                  <span>Learn More</span>
                </button>
              </Link>
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
