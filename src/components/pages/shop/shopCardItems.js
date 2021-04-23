import React from 'react';
import { Link } from 'react-router-dom';


function CardItem(props) {
    return (
      <>
        <li className='cards__item'>
          <Link className='cards__item__link' to={props.path}>
             <div class='card flex-row flex-wrap'> 
              <figure className='cards__item__pic-wrap' data-category={props.label}>
              <img
                src={props.src}
                className='cards__item__img'
                alt='Travel Image'
                
                // align='left'
              />
            </figure>
            </div>
            <div className='cards__item__info'>
              <h5 className='cards__item__text'>{props.text}</h5>
            </div>
          </Link>
        </li>
      </>
    );
  }
  
  export default CardItem;