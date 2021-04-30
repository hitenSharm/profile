import React from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Row } from "antd";

const SkillItem = (props) =>{
    
    const title=props.title;
    const data = props.data;

    return(
        <Row style={{justifyContent:"center" , textAlign:"center"}}>
        <h3>
            <Fade right>
            <h1 style={{color: "white", paddingTop: "0.1em" ,textDecoration:"underline"}}>
              {title}
            </h1> 
            <Fade left>
            <p style={{color: "rgb(168, 164, 164)"}}>
              {data}
            </p>            
            </Fade>                                 
            </Fade>
          </h3>
        </Row>   
    );

}

export default SkillItem;