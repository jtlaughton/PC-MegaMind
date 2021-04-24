
import React from 'react';
import '../../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';
import Button from 'react-bootstrap/Button'

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
    <Container className='sidebar_BG' fluid="md">
      <Row className="sidebar_row" noGutters = {true}>
        <Col md ={1}>
        <SideBar/>
        </Col>
        <Col>
          <div>
            <h1 className='buildersOverview'>Overview</h1>
            <p>A PC contains the following components:</p>
            <Row>
                <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                  <p className='descriptions'>CPU: Description Here</p>
                </Col>
                <Col xs sm md lg xl={{ span: 3, offset: 2}}>
                <Link to="/cpu_buildersGuide">
                <Button variant="dark">Learn More</Button>{' '}
                </Link>
                </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>CPU Cooler: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/cpuCooler_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Motherboard: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/motherboard_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Memory: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/memory_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Storage: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/storage_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Video Card: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/videoCard_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Case: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/case_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Power Supply: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/powerSupply_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Operating System: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/operatingSystem_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

              </Link>
              </Col>
            </Row>

            <Row>
              <Col xs sm md lg xl={{ span: 4, offset: 1}}>
                <p className='descriptions'>Optical Drive: Description Here</p>
              </Col>
              <Col xs sm md lg xl={{ span: 3, offset: 2}}>
              <Link to="/opticalDrive_buildersGuide">
              <Button variant="dark">Learn More</Button>{' '}

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
