import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import * as RiIcons from 'react-icons/ri';
import { Form, Button, FormGroup, FormControl, ControlLabel, InputGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SideBarDiv = styled.div`
    display: flex;
    color: #3b3b3b;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    width: 150px;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    outline: 5px solid grey;

    &:hover{
        background: #D1BECD;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }`;

 const SideBarLabel = styled.span`
    margin-left: 16px;
`;

const FilterBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;
    list-style: none;
    text-decoration: none;
    font-size: 18px;
    flex-direction: column;
    `;

const DropDownDiv = styled.div`
    height: 275px;
    display: flex;
    flex-direction: column;
    color: #3b3b3b;
    text-align: left;
`;

const DataObject = [
    {
        title: 'Part Selection',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: null,
    }
];

let bruh = ['bruh'];

const FilterButton = () => {
    const [subnav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subnav);

    return (
        <FilterBoxDiv>
            <SideBarDiv onClick={showSubNav}>
                <div>
                    <SideBarLabel>
                        Filter
                    </SideBarLabel>
                </div>
                <div>
                    {(DataObject.subNav == null) && subnav 
                    ? DataObject.iconOpened 
                    : (DataObject.subNav == null)
                    ? DataObject.iconClosed
                    : null}
                </div>
            </SideBarDiv>
            {subnav && bruh.map(() => {
                return (
                <DropDownDiv>
                    <Form>
                        <fieldset>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Sort By</Form.Label>
                                <Form.Control as="select">
                                <option>Low to High</option>
                                <option>High to Low</option>
                                <option>Alphabetical</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
                                <Form.Control as="select">
                                <option>Brand 1</option>
                                <option>Brand 2</option>
                                </Form.Control>
                            </Form.Group>
                            <Form>
                                <Form.Label>Price Range</Form.Label>
                                <Row>
                                    <Col>
                                    <Form.Control placeholder="price low..." />
                                    </Col>
                                    <Col>
                                    <Form.Control placeholder="price high..." />
                                    </Col>
                                </Row>
                                </Form>
                        </fieldset>
                    </Form>
                </DropDownDiv>);
            })}
        </FilterBoxDiv>
    );
}

export default FilterButton;