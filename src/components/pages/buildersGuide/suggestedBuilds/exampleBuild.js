import React from 'react';
import '../../../../App.css';
import Cards from './exampleBuildCards';
import SideBar from './SideBarSuggested';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from 'react-router-dom';
import Cart from './cart';
import pic1 from '../../../../Images/img-1.jpg';
import pic2 from '../../../../Images/img-2.jpg';
import pic3 from '../../../../Images/img-3.jpg';
import Button from 'react-bootstrap/Button'
import Slider from "react-slick";



export default function exampleBuild() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2
  };
return (
  <>
    <div className='examplePages'>
  <Container className='sidebar_BG' fluid='md'>
    <Row className="sidebar_row" xs sm md lg xl={1}>
      <Col xs sm md lg xl={{ span: 3, offset: 0}}>
        <SideBar/>
      </Col>
      <Col xs sm md lg xl={{ span: 8, offset: 0}}>
        <h1 >Example PC Build</h1>
        <Row className="sidebar_row" xs sm md lg xl={1}>

          <Link to="/suggestedBuilds">
            <Button variant="dark">Back</Button>{' '}
          </Link>

          <Link to="/cart_example">
            <div className ='cartClass'>
               <Cart/>
            </div>
          </Link>

          <Link to="/cart_example">
            <Button variant="dark">Add All To Cart</Button>{' '}
          </Link>

        </Row>

        <Row className="sidebar_row" xs sm md lg xl={1}>
          <Col xs sm md lg xl={{ span: 1, offset: 0}}>
            <p className='justifcationParagraph'>Justifcation Paragraph</p>
            
          </Col>

          <Col xs sm md lg xl={{ span: 6, offset: 5}}>
          <div className='sliderHeader'>

            
            <h2 > Parts in this build</h2>
            <Slider {...settings}>

             <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">CPU</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">CPU Cooler</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Motherboard</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Memory</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Storage</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Video Card</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Case</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Power Supply</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Operating System</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <div class="card">
                  <img class="card-img-top" src={pic1} alt="Card image cap"/>
                  <div class="card-body">
                    <h5 class="card-title">Optical Drive</h5>
                    <p class="card-text">Description</p>
                  </div>
                </div>
              </div>
            </div>



            </Slider>
          </div>

              
          </Col>
          
        </Row>

        <Row className="sidebar_row" xs sm md lg xl={1}>
          
        

        </Row>

      </Col>
    </Row>
  </Container>
  </div>

  </>
);
}
