import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


function navbar() {

  return (
    <>
      <nav className='navbar'>
      <h1>
      PC Megamind
      </h1>
        <li className='nav-item'>
          <Link to='/' className='nav-links'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/buildersGuide' className='nav-links'>
            Builders Guide
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/news' className='nav-links'>
            News
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/shop' className='nav-links'>
            Shop
          </Link>
        </li>

      </nav>
  </>
);
}

export default navbar;
