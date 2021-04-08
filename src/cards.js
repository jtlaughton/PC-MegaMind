import React from 'react';
import CardItem from './cardItem';
import './cards.css';
function Cards() {
  return (
    <div className='cards'>
      <h1>News</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='../../../Images/img-1.jpg'
              text='Product Description here.'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='../images/img-1.jpg'
              text='Product Description here.'
              label='Luxury'
              path='/services'
            />

            <CardItem
              src='../images/img-3.jpg'
              text='Product Description here.'
              label='Luxury'
              path='/services'
            />

            <CardItem
              src='../images/img-4.jpg'
              text='Product Description here.'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Product Description here.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Product Description here.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Product Description here.'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='images/img-8.jpg'
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