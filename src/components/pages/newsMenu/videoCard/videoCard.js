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

function videoCard() {
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
          <h1 >Video Card News</h1>
          <p>Most recent computer part news:</p>

          <div class="container-md">
                <div class="card-deck">

                   <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Video Card News Article</h5>
                        <p class="card-text">New Nvidia RTX 3090</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Video Card News Article</h5>
                        <p class="card-text">Best GPUs for mining</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Video Card News Article</h5>
                        <p class="card-text">Bitcoin mining w/ RTX 3060</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Video Card News Article</h5>
                        <p class="card-text">New Nvidia plans for 4000 series GPUs</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
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

export default videoCard
