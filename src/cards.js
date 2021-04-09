import React from 'react';
import CardItem from './cardItem';
import './cards.css';
import pic1 from './Images/img-1.jpg';


function Cards() {
  return (
    <div className='cards' card>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='GPU news'
              label='GPU'
              path='/newsExample'
              
           />
            <CardItem
              src= {pic1}
              text='CPU news'
              label='CPU'
              path='/newsExample'
            />

            <CardItem
              src={pic1}
              text='Motherboard news'
              label='Motherboard'
              path='/newsExample'
            />

            <CardItem
              src={pic1}
              text='Memory news'
              label='Memory'
              path='/newsExample'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src= {pic1}
              text='Cooling news'
              label='Cooling'
              path='/newsExample'
            />
            <CardItem
              src= {pic1}
              text='OS News'
              label='OS'
              path='/newsExample'
            />
            <CardItem
              src= {pic1}
              text='Storage News'
              label='Storage'
              path='/newsExample'
            />
            <CardItem
              src= {pic1}
              text='Optical Drive'
              label='Optical Drive'
              path='/newsExample'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
