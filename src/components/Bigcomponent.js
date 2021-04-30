import React ,{useEffect} from "react";
import Name from "./name";
import Navbar from './navbar'
import Aboutme from './aboutme'
import Links from './icons'
import Count from './count'
import Skill from './skills'

function Bigcomponent(){
    return(
        <div>            
        <Navbar/>
        <Name/>
        <Links/>
        <Count/>
        <Aboutme/> 
        <Skill/>
        </div>
    );

}

export default Bigcomponent;