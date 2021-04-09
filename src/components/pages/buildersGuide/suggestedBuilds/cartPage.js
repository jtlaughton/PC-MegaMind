import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import SideBar from '../SideBar';

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const ComponentDiv = styled.div`
    border-radius: 25px;
    height: 120px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #f8f8ff;
    display: flex;
    flex-direction: row;
    margin-top: 10px;

    &:hover{
        background: #D1BECD;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }`;

const TextDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

function cartPage() {
    return (
        <>
            <div className='pages'>
            <Container className='sidebar_BG'>
            <Row className="sidebar_row" xs sm md lg xl={1}>
            <Col xs sm md lg xl={{ span: 3, offset: 0}}>
                <SideBar/>
            </Col>
            <Col xs sm md lg xl={{ span: 9, offset: 0}}>
                <WrapperDiv>
                <ComponentDiv>
                    <TextDiv>
                        <h2>Component 1</h2>
                        <p>Specs and Link...</p>
                    </TextDiv>
                </ComponentDiv>
                <ComponentDiv>
                <TextDiv>
                        <h2>Component 2</h2>
                        <p>Specs and Link...</p>
                    </TextDiv>
                </ComponentDiv>
                <ComponentDiv>
                <TextDiv>
                        <h2>Component 3</h2>
                        <p>Specs and Link...</p>
                    </TextDiv>
                </ComponentDiv>
                </WrapperDiv>
            </Col>
    </Row>
  </Container>
  </div>
        </>
    )
}

export default cartPage
