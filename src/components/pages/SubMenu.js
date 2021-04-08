import React, {useState}from 'react';
import { IoMdHeartEmpty } from 'react-icons/io';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const SideBarDiv = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    
    &:hover{
        background: #2CADD4;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SideBarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    
    &:hover{
        background: #2CADD4;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SideBarButton = styled.div`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;
    
    &:hover{
        background: #2CADD4;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SideBarLabel = styled.span`
    margin-left: 16px;
`;

const DropDownLink = styled(Link)`
    background: #2c95d3;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #4296bd;
        cursor: pointer
    }
`;

export const SubMenu = ({item}) => {
    const [subnav, setSubNav] = useState(false);

    const showSubNav = () => setSubNav(!subnav);

    if(item.path == null){
        return (
            <>
                <SideBarDiv onClick={item.subNav && showSubNav}>
                <div>
                    <SideBarLabel>
                        {item.title}
                     </SideBarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SideBarDiv>
            {subnav && item.subNav.map((item_sub, index) => {
                return (<DropDownLink to={item_sub.path} key={index}>
                    <SideBarLabel>
                        {item_sub.title}
                    </SideBarLabel>
                </DropDownLink>);
                })}
            </>
        );
    }
    else{
        return (
        <>
            <SideBarLink to = {item.path} onClick={item.subNav && showSubNav}>
                <div>
                    <SideBarLabel>
                        {item.title}
                     </SideBarLabel>
                </div>
                <div>
                    {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav 
                    ? item.iconClosed 
                    : null}
                </div>
            </SideBarLink>
            {subnav && item.subNav.map((item_sub, index) => {
                return (<DropDownLink to={item_sub.path} key={index}>
                    <SideBarLabel>
                        {item_sub.title}
                    </SideBarLabel>
                </DropDownLink>);
                })}
            </>
        )
    }
    
}
