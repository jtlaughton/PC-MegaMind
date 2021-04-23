import React from 'react';
import CardItem from './shopCardItems';
import './shopCards.css';
import jsonFile from '../../../data/shopitems.json';

const newSrc = require.context("../../../Images", true);

function Cards() {
    console.log(jsonFile.items.length);

    var myItems = jsonFile.items;

    return (
        <div className='cards' card>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            myItems.map((item, index) => {         
                                var temp = '.' + item.imageSrc;

                                return(
                                    <CardItem
                                        src = {newSrc(temp)}
                                        text = {item.itemName}
                                        label = {item.price}
                                        path = "/shop"
                                    />
                                );
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
// {
//                         chunks.map((childs, index) => {
//                             return (
//                                 <ul className='cards__items'>
//                                     {
//                                         childs.map((item, cindex) => {
//                                             var newSrc = "../../../Images/img-1.jpg";

//                                             console.log(item);
//                                             console.log(newSrc);
//                                             console.log(item.itemName);
//                                             console.log(item.price);
//                                             return (<CardItem
//                                                 src = {newSrc}
//                                                 text = {item.itemName}
//                                                 label = {item.price}
//                                             />);
//                                         })
//                                     }
//                                 </ul>
//                             )
//                         })
//                     }