

import React from 'react';
import styled from 'styled-components';
import HeroSection from '../Components/HeroSection';
import Services from '../Components/Services';
import Trusted from '../Components/Trusted';
import FeatureProduct from '../Components/FeatureProduct';


function Home(){
    const myData={
            name:'Biggest Sale',
        }
    return(
        <>
        <HeroSection myData={myData}/>
        <FeatureProduct/>
        <Services />
        <Trusted />
        </>
    );
}

const Wrapper =styled.section`
background-color :${({ theme})=>theme.colors.black};
width : 100px;
height:100vh;
`;

export default Home;