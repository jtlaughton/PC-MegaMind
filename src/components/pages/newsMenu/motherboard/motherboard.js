import React from 'react';
import '../../../../App.css';
import Navbar from '../../../../navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Cards from '../../../../cards';
import SideBar from '../newsSideBar';
import pic1 from '../../../../Images/img-1.jpg';

function motherboard() {
    return (
        <>
        <div className='pages'>
        <Container className='sidebar_BG'fluid="md">
          <Row className="sidebar_row" xs sm md lg xl={1}>
            <Col xs sm md lg xl={{ span: 3, offset: 0}}>
              <SideBar/>
              
            </Col>
            <Col xs sm md lg xl={{ span: 8, offset: 0}}>
            <div>
          <h1 >Motherboard News</h1>
          <p>Most recent computer part news:</p>

          <div class="container-md">
                <div class="card-deck">

                   <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Motherboard Article</h5>
                        <p class="card-text">ASUS Z490-A</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Motherboard Article</h5>
                        <p class="card-text">MSI MPG Z590</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Motherboard Article</h5>
                        <p class="card-text">Asus ROG Maximus XIII</p>
                      </div>
                      <div class="card-body">
                      <a href="/PC-MegaMind/#/newsExample" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Motherboard Article</h5>
                        <p class="card-text">ASRock B550 Phantom Gaming 4</p>
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

export default motherboard
