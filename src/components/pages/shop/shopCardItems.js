import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import CartPage from './cartPage'
import { Link } from 'react-router-dom';
// import { ToastProvider, useToasts, dataPersistenceLayer } from 'react-toast-notifications';
import pic1 from '../../../Images/3060.jpg';
import pic2 from '../../../Images/5700.jpg';
import pic3 from '../../../Images/memory.jpg';
import pic4 from '../../../Images/motherboard.jpg';
import pic5 from '../../../Images/case.jpg';
import pic6 from '../../../Images/cooler.jpg';
import pic7 from '../../../Images/optical-drive.jpg';
import pic8 from '../../../Images/storage.jpg';
import pic9 from '../../../Images/operating-system.jpg';
import pic10 from '../../../Images/power-supply.jpg';

import App from '../../../App';

function getStoredItems() {
  var temp = window.localStorage.getItem('items');
  console.log(temp);

  if (temp === null) {
    return [];
  }
  else {
    return JSON.parse(temp).items;
  }
}

function setStoredItems(obj) {
  var obj_string = JSON.stringify(obj);

  window.localStorage.setItem('items', obj_string);
}

function CardItem(props) {
  const [count, setCount] = useState(0);

  var tempSrc;

  switch (props.item.imageSrc) {
    case '3060':
      tempSrc = pic1;
      break;
    case '5700x':
      tempSrc = pic2;
      break;
    case 'memory':
      tempSrc = pic3;
      break;
    case 'motherboard':
      tempSrc = pic4;
      break;
    case 'case':
      tempSrc = pic5;
      break;
    case 'cooler':
      tempSrc = pic6;
      break;
    case 'optical-drive':
      tempSrc = pic7;
      break;
    case 'storage':
      tempSrc = pic8;
      break;
    case 'operating-system':
      tempSrc = pic9;
      break;
    case 'power-supply':
      tempSrc = pic10;
      break;
  }

  return (

    <div class="card" style={{ width: 250 }}>
      <img class="card-img-top" src={tempSrc} alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{props.item.itemName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Price: {props.item.price}</h6>
        <p class="card-text">{props.item.type}</p>
      </div>
      <Button onClick={() => {
        setCount(count + 1);

        console.log(count);

        var tmp = getStoredItems();
        var tmp_index = tmp.findIndex((e) => e.id === props.item.id);
        var the_item = props.item;

        if (tmp_index === -1 && count < 1) {
          var new_obj = {
            itemName: the_item.itemName,
            price: the_item.price,
            imageSrc: the_item.imageSrc,
            type: the_item.type,
            brand: the_item.brand,
            id: the_item.id,
            quant: 1
          }

          CartPage.addMore(new_obj);
        }
        else if (tmp_index === -1) {
          var new_list = CartPage.getCartItems();
          var new_quant = count + 1;

          var the_obj = {
            itemName: the_item.itemName,
            price: the_item.price,
            imageSrc: the_item.imageSrc,
            type: the_item.type,
            brand: the_item.brand,
            id: the_item.id,
            quant: new_quant
          }

          var the_index = new_list.findIndex((e) => e.id === the_item.id);

          new_list[the_index] = the_obj;

          CartPage.setCartItems(new_list);
        }
        else {
          var quant = tmp[tmp_index].quant + 1;

          var tmp_obj = {
            itemName: the_item.itemName,
            price: the_item.price,
            imageSrc: the_item.imageSrc,
            type: the_item.type,
            brand: the_item.brand,
            id: the_item.id,
            quant: quant
          }

          tmp[tmp_index] = tmp_obj;

          setStoredItems({ items: tmp }); 
        }

        App.toastNotify();
      }}>Add To Cart</Button>
    </div>
  );
}

export default CardItem;