import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {SideBarData} from './shopSideBarData';
import {SubMenu} from '../SubMenu';

const Nav = styled.div`
    background: #242221;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const SideBarNav = styled.nav`
    background: #242221;
    width: 250px;
    display: flex;
    justify-content: center;
    position: relative;
    height: 122vh;
    top: 0;
    transition: 350ms;
    z-index: 10;
`;

const SideBarWrap = styled.div`
    width: 100%;
`;

const SideBar = () => {
    const [sidebar, setSidebar] = useState(true);

    return (
        <>
            <SideBarNav sidebar={sidebar}>
                <SideBarWrap>
                    {SideBarData.map((item, index) =>{
                        return <SubMenu item={item} key={index}/>
                    })}
                </SideBarWrap>
            </SideBarNav>
        </>
    );
}

export default SideBar;
