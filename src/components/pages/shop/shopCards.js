import React from 'react';
import CardItem from './shopCardItems';
import './shopCards.css';
import styled from 'styled-components';
import jsonFile from '../../../data/shopitems.json';
import FilterButton from './filterButton';

import pic1 from '../../../Images/3060.jpg';
import pic2 from '../../../Images/5700.jpg';

const FilterBoxDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: left;
    flex-direction: column;
    `;

const WrapperDiv = styled.div`
    width: 23rem;
    padding-bottom: 2rem; 
`;

class Cards extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            all_data: jsonFile.items,
            cur_data: jsonFile.items
        };
    }

    render(){
        return(
            <FilterBoxDiv>
                <WrapperDiv>
                    <FilterButton updateSort = {
                                    e => {
                                        switch(e.target.value){
                                            case '0':
                                                this.sortItemsPriceLow();
                                                break;
                                            case '1':
                                                this.sortItemsPriceHigh();
                                                break;
                                            case '2':
                                                this.sortItemsName();
                                                break;
                                            
                                        } 
                                    }
                                }
                                
                                updateBrand = {
                                    e => {
                                        this.filterBrand(e.target.value)
                                    }
                                }
                                
                                updatePrice = {
                                        e => {
                                            var elem_high = document.getElementById("input_high");
                                            var elem_low = document.getElementById("input_low");

                                            this.filterRange(elem_low.value, elem_high.value);
                                        }
                                }/>
                </WrapperDiv>
                <div class="container-md">
                    <div class="card-deck">
                    {
                        this.state.cur_data.map((item, index) => {         
                            var temp;
                            
                            switch(item.imageSrc){
                                case '3060':
                                    temp = pic1;
                                    break;
                                case '5700x':
                                    temp = pic2;
                                    break;
                            }

                            return(
                                <div class="card-deck" style = {{padding: 10}}>
                                <div class="card" style = {{width: 250}}>
                                    <img class="card-img-top" src={temp} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{item.itemName}</h5>
                                        <p class="card-text">{item.type}</p>
                                    </div>
                                </div>
                                </div>
                            );
                        })
                    }
                   </div>
                </div>  
        </FilterBoxDiv>
        );     
    }

    filterRange(low, high){
        var new_data = [];

        this.state.all_data.forEach(elem => {
            if(elem.price <= high && elem.price >= low){
                new_data.push(elem);
            }
        });

        this.setState({
            cur_data: new_data
        });
    }

    filterBrand(brand){
        if(brand == 'None'){
            this.setState({
                cur_data: this.state.all_data
            })

            return;
        }

        var new_data = [];

        this.state.all_data.forEach(elem => {
            if(elem.brand == brand){
                new_data.push(elem);
            }
        });

        this.setState({
            cur_data: new_data
        });
    }

    sortItemsName(){
        var new_data = [];

        new_data = this.state.cur_data;

        new_data.sort((a, b) => (a.itemName > b.itemName) ? 1 : -1);

        this.setState({
            cur_data: new_data
        });
    }

    sortItemsPriceLow(){
        var new_data = [];

        new_data = this.state.cur_data;

        new_data.sort((a, b) => (a.itemName > b.itemName) ? 1 : -1);

        this.setState({
            cur_data: new_data
        });
    }

    sortItemsPriceHigh(){
        var new_data = [];

        new_data = this.state.cur_data;

        new_data.sort((a, b) => (a.itemName < b.itemName) ? 1 : -1);

        this.setState({
            cur_data: new_data
        });
    }
}

export default Cards;