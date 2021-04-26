import React from 'react';
import '../../../../App.css';
import Navbar from '../../../../navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Cards from '../../../../cards';
import SideBar from '../newsSideBar';
import pic1 from '../../../../Images/optical-drive.jpg';

function opticalDrive() {
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
          <h1 >Optical Drive News</h1>
          <p>Most recent computer part news:</p>

          <div class="container-md">
                <div class="card-deck">

                   <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Optical Drive News Article Build</h5>
                        <p class="card-text">New Blueray Optical Drive for 4k</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Optical Drive News Article</h5>
                        <p class="card-text">LG's New Optical Drive</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Optical Drive News Article</h5>
                        <p class="card-text">Optical Drives: External vs Internal</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Optical Drive News Article</h5>
                        <p class="card-text">Should you use an external optical drive?</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>
                </div>
             </div> 
        </div>
      
            </Col>
          </Row>
        </Container>
        </div>
        </>
      );
}

export default opticalDrive
