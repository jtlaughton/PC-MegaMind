import React from 'react';
import CardItem from './cardItem';
import './cards.css';
import pic1 from './Images/img-1.jpg';


function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='GPU news'
              label='GPU'
              path='/services'
           />
            <CardItem
              src= {pic1}
              text='CPU news'
              label='CPU'
              path='/services'
            />

            <CardItem
              src={pic1}
              text='Motherboard news'
              label='Motherboard'
              path='/services'
            />

            <CardItem
              src={pic1}
              text='stuff.'
              label='Storage'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='Product Description here.'
              label='Cooling'
              path='/services'
            />
            <CardItem
              src= {pic1}
              text='Product Description here.'
              label='OS'
              path='/products'
            />
            <CardItem
              src= {pic1}
              text='Product Description here.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src= {pic1}
              text='Product Description here.'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;