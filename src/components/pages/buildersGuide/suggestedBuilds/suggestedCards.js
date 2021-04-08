import React from 'react';
import CardItem from './suggestedCardItems';
import './suggestedCards.css';
import pic1 from '../../../../Images/img-1.jpg';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='$1600 Gaming rig, comes with....'
              label='PC Gaming'
              path='/services'
           />

          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='$750 Office desktop, perfect for...'
              label='Office Work'
              path='/services'
            />
          </ul>

          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='$2500 server desktop with...'
              label='Server Hosting'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
