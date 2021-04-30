import React, { useEffect,useState } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import useWindowDimensions from '../hooks/useWindowDimensions'
import SkillItem from './skillItem';

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
    if(width<500)
    {
      setiSize(360)
    }
    if(width>=500){
      setiSize(560)
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
              {" "}
              <Fade right>Skills</Fade>
            </b>
            <hr></hr>
          </h1>
        </Col>
      </Row>
      <Row style={{ display: "flex", flexDirection: "column" }}>
        <Row style={{ justifyContent: "center" }}>
          <Col style={{ margin: "0.4em" }}>
            <Fade right>
              <iframe
                width={iSize}
                height="315"
                src="https://www.youtube.com/embed/XKX2nW_MyxU"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Fade>
          </Col>
        </Row>

       <SkillItem
          title={"Lanauges"}
          data={"C/C++ , Python , Javascript , Dart"}
        />
        <SkillItem
          title={"Web Dev"}
          data={"NodeJS , ExpressJS , ReactJS , Ant Design , Bootstrap"}
        />
        <SkillItem
          title={"Databases/Baas"}
          data={"MongoDB , MySQL , Firebase"}
        />
        <SkillItem title={"Devops"} data={"Docker, Git"} />
        <SkillItem title={"App Dev"} data={"Flutter"} />
        <SkillItem
          title={"Miscellaneous"}
          data={"Heroku , Netlify , Adobe Premire Pro"}
        /> 
      </Row>      
    </div>
  );
};

export default Skill;
