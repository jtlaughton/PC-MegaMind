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
import CardItem from './suggestedCardItems';




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
    <div className='pages'>
  <Container className='sidebar_BG' fluid='md'>
    <Row className="sidebar_row" xs sm md lg xl={1}>
      <Col xs sm md lg xl={{ span: 3, offset: 0}}>
        <SideBar/>
      </Col>
      <Col xs sm md lg xl={{ span: 8, offset: 0}}>
        <h1 >Default PC Build</h1>
        <Row className="sidebar_row" xs sm md lg xl={1}>

          <Col xs sm md lg xl={{ span: 1, offset: 0}}>
            <Link to="/suggestedBuilds">
              <Button variant="dark">Back</Button>{' '}
            </Link>
          </Col>

          <Col xs sm md lg xl={{ span: 1, offset: 10}}>
            <Link to="/cart_example">
              <Button variant="dark" id="AddCartButton">Add All To Cart</Button>{' '}
            </Link>
          </Col>

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
                <CardItem item = {{
                  itemName: "AMD Ryzen 7 5700x",
                  price: 400,
                  imageSrc: '5700x',
                  type: "CPU",
                  brand: "Nvidia",
                  id: 10000,
                  quant: 0
                }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                    itemName: "Corsair H110i",
                    price: 400,
                    imageSrc: 'cooler',
                    type: "CPU Cooler",
                    brand: "Corsair",
                    id: 10100,
                    quant: 0
                  }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                      itemName: "Asus Z490-A",
                      price: 400,
                      imageSrc: 'motherboard',
                      type: "Motherboard",
                      brand: "Asus",
                      id: 10200,
                      quant: 0
                    }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                      itemName: "16gb DDR4 RAM",
                      price: 400,
                      imageSrc: 'memory',
                      type: "Memory",
                      brand: "Corsair",
                      id: 10300,
                      quant: 0
                    }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                        itemName: "2 TB SSD",
                        price: 400,
                        imageSrc: 'storage',
                        type: "Storage",
                        brand: "WesternDigital",
                        id: 10400,
                        quant: 0
                      }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                        itemName: "RTX 3060",
                        price: 400,
                        imageSrc: '3060',
                        type: "GPU",
                        brand: "Nvidia",
                        id: 10500,
                        quant: 0
                      }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                        itemName: "NZXT Case",
                        price: 400,
                        imageSrc: 'case',
                        type: "Case",
                        brand: "NZXT",
                        id: 10600,
                        quant: 0
                      }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                        itemName: "Nox 650W ATX",
                        price: 100,
                        imageSrc: 'power-supply',
                        type: "Power Supply",
                        brand: "Nox",
                        id: 10700,
                        quant: 0
                      }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <div class="col mb-4">
                <CardItem item = {{
                        itemName: "Microsoft Windows 10",                        
                        price: 80,
                        imageSrc: 'operating-system',
                        type: "Operating System",
                        brand: "Windows",
                        id: 10800,
                        quant: 0
                      }}/>
              </div>
            </div>
            <div className='sliderHeader1'>        
              <CardItem item = {{
                        itemName: "LG BP60NB10",
                        price: 100,
                        imageSrc: 'optical-drive',
                        type: "Optical Drive",
                        brand: "LG",
                        id: 10900,
                        quant: 0
                      }}/>
            </div>

            </Slider>
          </div>

              
          </Col>
          
        </Row>
      </Col>
    </Row>
  </Container>
  </div>

  </>
);
}
