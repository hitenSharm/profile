import React, { useEffect,useState } from "react";
import Fade from "react-reveal/Fade";
import { Row, Col } from "antd";
import useWindowDimensions from '../hooks/useWindowDimensions'
import SkillItem from './skillItem';
import ComputersCanvas from "./Computers";

const Skill = () => {

  const {height,width} = useWindowDimensions();
  const [iSize,setiSize]=useState(560);
  const [xsmal,setXmal]=useState(1);

  useEffect(()=>{
   if(width<400){
       setXmal(2);
   }
   else{
       setXmal(3);
   }   
  })
  
  useEffect(()=>{    
    if(width<500 && width>320)
    {
      setiSize(360)
    }
    if(width>=500){
      setiSize(560)
    }      
    if(width<=320)
    {
      setiSize(300)
    }
  },[width])

  return (
    <div id="skills">        
      <Row style={{ marginTop: "16vh" }}>
        <Col xxl={5} xl={16} lg={3} xs={xsmal} md={3} sm={3} />
        <Col style={{ marginTop: "5px", padding: "5px" }}>
          <h1
            style={{
              fontSize: "5em",
              fontFamily: "monospace",
              color: "rgb(168, 164, 164)",
              marginLeft: "25px",
            }}
          >
            <b>              
              <Fade right>Skills</Fade>
            </b>
            <hr></hr>
          </h1>
        </Col>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col style={{ marginTop: "-5em",right:"30px" }}>
            <div style={{
              width:iSize,
              height:"315px"              
            }}>
            <ComputersCanvas/>
            </div>
          </Col>
        </Row>
       <SkillItem
          title={"Languages"}
          data={"C/C++ , Python , Javascript , Dart"}
        />
        <SkillItem
          title={"Web"}
          data={"NodeJS , ExpressJS , ReactJS , Ant Design , Bootstrap"}
        />
        <SkillItem
          title={"Databases"}
          data={"MongoDB , MySQL , Firebase"}
        />
        <SkillItem title={"DevOps"} data={"Docker, Git"} />
        <SkillItem title={"App Dev"} data={"Flutter"} />
        <SkillItem
          title={"Tools"}
          data={"Heroku , Netlify , Adobe Premiere Pro"}
        />         
      </Row>      
    </div>
  );
};

export default Skill;

