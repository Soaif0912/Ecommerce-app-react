
import HeroSection from "../Components/HeroSection";
import {useContext} from 'react';
import { AppContext } from "../context/Productcontext";
import { useProductContext } from "../context/Productcontext";

function About(){
    const data={
        name : 'We are fastest growing business',
    }

    // const {name} = useContext(AppContext);
    const {name} = useProductContext();

    return(
        <>
        {name}
        <HeroSection myData={data}/>
        </>
    )
}
export default About;