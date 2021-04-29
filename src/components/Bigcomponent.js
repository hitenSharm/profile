import React ,{useEffect} from "react";
import Name from "./name";
import Navbar from './navbar'
import Aboutme from './aboutme'
import Links from './icons'
import Count from './count'
import AOS from "aos";
import "aos/dist/aos.css";

function Bigcomponent(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div>
        <Navbar/>
        <Name/>
        <Links/>
        <Count/>
        <Aboutme/> 
        </div>
    );

}

export default Bigcomponent;