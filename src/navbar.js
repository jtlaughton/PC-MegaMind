import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';
import pic1 from './Images/pcmm_icon.png';
import * as AiIcons from 'react-icons/ai';
import {Navbar, Nav} from 'react-bootstrap';

function navbar() {

  return (
    <>
      {/* <nav class="navbar navbar-expand-lg navbar-custom">
        <a class="navbar-brand" href="/PC-MegaMind">
            <img src={pic1} width="30" height="30" class="d-inline-block align-top" alt="" />
            PC MegaMind
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
        </button>

        
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav mr-auto">
            <a class="nav-item nav-link active" href="/PC-MegaMind">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="/PC-MegaMind/#/buildersGuide">Builders Guide</a>
            <a class="nav-item nav-link" href="/PC-MegaMind/#/news">News</a>
            <a class="nav-item nav-link" href="/PC-MegaMind/#/shop">Shop</a>
          </ul>
          <ul class="navbar-nav">
             <a class='nav-item nav-link' href='/PC-MegaMind/#/cart'><AiIcons.AiOutlineShoppingCart size = {24}/></a>
            </ul>
        </div>
    </nav> */}

    <Navbar variant="dark" className = 'color-nav'>
      <Navbar.Brand><img src={pic1} width="30" height="30" class="d-inline-block align-top" alt="" />PC MegaMind</Navbar.Brand>
        <Nav className="mr-auto" defaultActiveKey='home'>
          <Nav.Link eventKey = 'home' href="/PC-MegaMind/#">Home</Nav.Link>
          <Nav.Link href="/PC-MegaMind/#/buildersGuide">Builders Guide</Nav.Link>
          <Nav.Link href="/PC-MegaMind/#/news">News</Nav.Link>
          <Nav.Link href="/PC-MegaMind/#/shop">Shop</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/PC-MegaMind/#/cart"><AiIcons.AiOutlineShoppingCart size = {24}/></Nav.Link>
        </Nav>
    </Navbar>
  </>
);
}

export default navbar;
