import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

//functions
// function clickMe(){
//   alert('clicked');
// }

export default function home() {
return (
  <>
    <div className='home'>
      <div>
        <h1 className='homeHeader'>Welcome to PC MegaMind</h1>
      </div>
      <div className='homeParagraph1'>
        <p>A site for beginners in building a PC</p>
      </div>
      <div class="homeButton">
        <Link to="/buildersGuide">
          <button className='homeButton' type="button" class="btn btn-primary btn-dark btn-lg">Ready to begin? Click here and jump in!</button>
          
        </Link>
      </div>

    </div>
  </>
);
}
