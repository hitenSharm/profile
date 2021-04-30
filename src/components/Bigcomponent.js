import React ,{useEffect} from "react";
import Name from "./name";
import Navbar from './navbar'
import Aboutme from './aboutme'
import Links from './icons'
import Count from './count'


function Bigcomponent(){
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