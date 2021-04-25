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
                        <h5 class="card-title">GPU News</h5>
                        <p class="card-text">Best GPUs for mining</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">CPU News</h5>
                        <p class="card-text">Intel unveils new 10th gen processor</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">Memory News</h5>
                        <p class="card-text">Experts show their take on SSDs</p>
                      </div>
                      <div class="card-body">
                      <a href="/exampleBuild" class="card-link">View Article</a>
                      </div>
                    </div>

                    <div class="card" >
                      <img class="card-img-top" src={pic1} alt="Card image cap"/>
                      <div class="card-body">
                        <h5 class="card-title">PC Case News</h5>
                        <p class="card-text">Top 10 Gaming Cases</p>
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
