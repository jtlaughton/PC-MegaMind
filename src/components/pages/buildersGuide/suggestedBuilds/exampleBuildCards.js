import React from 'react';
import CardItem from './suggestedCardItems';
import './suggestedCards.css';
import pic1 from '../../../../Images/img-1.jpg';


function Cards() {
  return (
    <div className='cards bg-transparent'>
      <div className='cards__container bg-transparent'>
        <div className='cards__wrapper bg-transparent'>
          <ul className='cards__items bg-white'>
  
            <CardItem
              src= {pic1}
              text='$1500 Gaming rig, comes with....'
              label='PC Gaming'
              path='/exampleBuild'
           />
           <CardItem
              src= {pic1}
              text='$1500 Gaming rig, comes with....'
              label='PC Gaming'
              path='/exampleBuild'
          
           />
           <CardItem
              src= {pic1}
              text='$1500 Gaming rig, comes with....'
              label='PC Gaming'
              path='/exampleBuild'
           />
           <CardItem
              src= {pic1}
              text='$1500 Gaming rig, comes with....'
              label='PC Gaming'
              path='/exampleBuild'
           />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
