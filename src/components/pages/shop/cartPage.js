import React from 'react';
import styled from 'styled-components';
import { Button } from "react-bootstrap";
import App from '../../../App';
import './cartItems.css';

import pic1 from '../../../Images/3060.jpg';
import pic2 from '../../../Images/5700.jpg';
import pic3 from '../../../Images/memory.jpg';
import pic4 from '../../../Images/motherboard.jpg';
import pic5 from '../../../Images/case.jpg';
import pic6 from '../../../Images/cooler.jpg';
import pic7 from '../../../Images/optical-drive.jpg';
import pic8 from '../../../Images/storage.jpg';
import pic9 from '../../../Images/operating-system.jpg';

const PageDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding: 20px;
`;

const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
`;

const ComponentDiv = styled.div`
    position: relative;
    border-radius: 25px;
    height: 120px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #f8f8ff;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    width: 80%;
`;

const TextDiv = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
`;

const ButtonDiv = styled.div`
    position: absolute;
    top: 10px;
    right: -100px;
    width: 200px;
    height: 100px;
`;

const ImageDiv = styled.div`
    display: flex;
    height: 7rem;
    width: 7rem;
    padding-left: 10px;
`;

const TotalDiv = styled.div`
    display: flex;
    height: 20rem;
    width: 25%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #f8f8ff;
    border-radius: 25px;
    align-items: center;
    padding-left: 3rem;
`;

const DividerDiv = styled.div`
    border-bottom: 2px solid gray;
    opacity: 65%;
    padding-bottom: 5px
`


class CartPage extends React.Component {
    static cart_items = [];

    constructor(props) {
        super(props);

        this.state = {
            count: 1
        }

        this.total = 0.0;
    }

    static getCartItems() {
        return this.cart_items;
    }

    static setCartItems(new_items) {
        this.cart_items = new_items;
    }

    static addMore(new_item) {
        var new_arr = CartPage.getCartItems();
        new_arr.push(new_item);

        this.cart_items = new_arr;
    }

    getStoredItems() {
        var temp = window.localStorage.getItem('items');
        console.log(temp);

        if (temp === null) {
            return [];
        }
        else {
            return JSON.parse(temp).items;
        }

    }

    setStoredItems(obj) {
        var obj_string = JSON.stringify(obj);

        window.localStorage.setItem('items', obj_string);
    }

    removeStoredItems() {
        window.localStorage.removeItem('items');
    }

    render() {
        var temp = CartPage.getCartItems();

        var stored_items = this.getStoredItems();

        stored_items = stored_items.concat(temp);

        var new_items = [];
        stored_items.forEach(element => {
            if (new_items.findIndex((e) => e.id === element.id) === -1) {
                new_items.push(element);
            }
        });

        this.total = 0.0;
        new_items.forEach((e) => {
            this.total += e.price;
        })

        this.setStoredItems({ items: new_items });

        var tax = 0.08 * this.total;
        var final = this.total + tax;

        return (
            <div className='pages'>
                <PageDiv>
                <WrapperDiv>
                    {
                        new_items.map((item, index) => {
                            var tempSrc;

                            switch (item.imageSrc) {
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
                            }

                            return (
                                <ComponentDiv>
                                    <ImageDiv>
                                        <img src={tempSrc} className='img-item' />
                                    </ImageDiv>
                                    <TextDiv>
                                        <h2>{item.itemName}</h2>
                                        <p>Quantity: {item.quant}</p>
                                    </TextDiv>
                                    <ButtonDiv>
                                        <Button onClick={() => {
                                            var the_items = new_items;

                                            var the_index = the_items.findIndex((e) => e.id === item.id);

                                            if (index > -1) {
                                                the_items.splice(the_index, 1);
                                            }

                                            this.setStoredItems({ items: the_items });
                                            CartPage.setCartItems([]);

                                            this.setState({
                                                count: this.state.count + 1
                                            })
                                        }} variant='danger'>Remove</Button>
                                    </ButtonDiv>
                                </ComponentDiv>
                            )
                        })
                    }

                </WrapperDiv>
                <TotalDiv>
                    <TextDiv>
                        <h2>Subtotal</h2>
                        <DividerDiv />
                        <h3>${this.total}</h3>
                        <h3>     + Tax: ${tax}</h3>
                        <DividerDiv />
                        <h3>     Total: ${final}</h3>
                    </TextDiv>
                </TotalDiv>
                </PageDiv>
            </div>
        );
    }
}

export default CartPage
