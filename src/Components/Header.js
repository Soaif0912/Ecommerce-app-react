import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

import Navbar from './Nav';

function Header(){

    return(
        <MainHeder>
            <NavLink to="./">
                <img className="logo" src="./images/site-logo.svg" alt="Site-logo"/>
            </NavLink>

            <Navbar />
        </ MainHeder>
    )
}

const MainHeder = styled.header` 
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
 padding-left: 40px;
 padding-right: 40px;
.logo{
 height: 7rem;
}
@media (max-width:${({theme})=>theme.media.mobile}) { 
} 
`;

export default Header;