import React from 'react';
import '../../../App.css';
import Navbar from '../../../navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Cards from '../../../cards';
import SideBar from './newsSideBar';
import pic1 from '../../../Images/img-1.jpg';

export default function news() {
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
          <h1 >All News</h1>
          <p>Most recent computer part news:</p>

          <div class="container-md">
                <div class="card-deck">

                   <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Budget Build</h5>
                        <p class="card-text">This build is the budget build</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">Click here to look at build</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Office Build</h5>
                        <p class="card-text">This build is the office build</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">Click here to look at build</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Gaming Build</h5>
                        <p class="card-text">This build is the gaming build</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">Click here to look at build</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">High End Build</h5>
                        <p class="card-text">This build is a high end build</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">Click here to look at build</a>
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
