import React from 'react';
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function buildersGuideMenu(){
    return (<>
        <div>
        {/* <Container className='sidebar_BG'>
            <Row className="sidebar_row" xs sm md lg xl={1}>
                <Col xs sm md lg xl={{ span: 3, offset: 1}}>test1</Col> 
            </Row>
            <Row className="sidebar_row" xs sm md lg xl={1}> 
                <Col  xs sm md lg xl={{ span: 3, offset: 1}}>test2</Col> 
            </Row>
            <Row className="sidebar_row" xs sm md lg xl={1}>
                <Col  xs sm md lg xl={{ span: 3, offset: 1}}>test3</Col> 
            </Row>
        </Container> */}
            <ul>
                <li className='nav-item'>
                    <Link to='/buildersGuide' className='nav-links'>
                        Overview
                    </Link>
                    </li>

                    <li className='nav-item'>
                    <Link to='/suggestedBuilds' className='nav-links'>
                        Suggested Builds
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/shop' className='nav-links'>
                        Part Selection
                    </Link>
                </li>
            </ul>
        </div>
    </>);
}