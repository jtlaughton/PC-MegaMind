 
import React from 'react';
import '../../App.css';

//functions
function clickMe(){
  alert('clicked');
}

export default function home() {
return (
  <>
    <div className='home'>
      <div>
        <h1 className='homeHeader'>Welcome to PC MegaMind</h1>
      </div>
      <div className='homeParagraph1'>
        <p>A site for beginners in building a PC.</p>
      </div>
      <div >
        <button className='homeButton' onClick={clickMe}>
          Ready to begin? Click here and jump in!
        </button>
      </div>
      
    </div>
  </>
);
}
