import React, { useEffect,useState } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Row, Col } from "antd";
import useWindowDimensions from '../hooks/useWindowDimensions'
import SkillItem from './skillItem';

const Skill = () => {

  const {height,width} = useWindowDimensions();
  const [iSize,setiSize]=useState(560);

  useEffect(()=>{
    if(width<500)
    {
      setiSize(360)
    }
    else{
      setiSize(560)
    }
  })

  return (
    <div id="skills">      
        <Row style={{ marginTop: "16vh" }}>
        <Col xxl={5} xl={16} lg={3} xs={0} md={3} sm={3} />      
        <Col style={{ marginTop: "5px", padding: "5px" }}>                           
         <h1
            style={{
              fontSize: "5em",
              fontFamily: "monospace",
              color: "rgb(168, 164, 164)",
              marginLeft:"25px"
            }}            
          >
            <b> <Fade right>Skills</Fade></b>
            <hr></hr>
          </h1>         
        </Col>
      </Row> 
      <Row style={{display:"flex" , flexDirection:"column"}}>
        <Row style={{justifyContent:"center"}}>
        <Col          
          style={{ margin: "0.4em" }}
        >
          <Fade right>
          <iframe width={iSize} height="315" src="https://www.youtube.com/embed/XKX2nW_MyxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        title={"Database/Baas"}
        data={"MongoDB , MySQL , Firebase"}
        />
        <SkillItem
        title={"Devops"}
        data={"Docker, Git"}
        />
        <SkillItem
        title={"App Dev"}
        data={"Flutter"}
        />
        <SkillItem
        title={"Miscellaneous"}
        data={"Heroku , Netlify , Adobe Premire Pro"}
        />
      </Row> 
    </div>
  );
};

export default Skill;

{/* <div id="skills">
      <Row style={{ marginTop: "17vh" }}>
        <Col xxl={5} xl={3} lg={3} xs={0} md={3} sm={3} />      
        <Col style={{ marginTop: "5px", padding: "5px" }}>                           
         <h1
            style={{
              fontSize: "5em",
              fontFamily: "monospace",
              color: "rgb(168, 164, 164)",
              marginLeft:"25px"
            }}            
          >
            <b> <Fade left>Skills</Fade>  </b>
            <hr></hr>
          </h1>         
        </Col>
      </Row>
      <Row style={{ marginTop: "10vh" }}>
        <Col xxl={5} xl={8} lg={3} xs={1} md={3} sm={3} />
        <Col          
          style={{ margin: "0.5em" }}
        >
          <Fade left>
          <iframe width={iSize} height="315" src="https://www.youtube.com/embed/XKX2nW_MyxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Fade>
        </Col>
        <Col
          xxl={9}
          xl={9}
          lg={12}
          md={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Row>
          <h3
            style={{ color: "rgb(168, 164, 164)", padding: "1em" }}            
          >
            <Fade right>
            I am Hiten Sharma. I am currently studying at Indian Institute of Information Technology and Management Gwalior
            in the course Infromation Technology , also known as Computer Science.          
            </Fade>
          </h3>
          <Row>
          <h3
            style={{ color: "rgb(168, 164, 164)", padding: "1em" }}            
          >
            <Fade right>          
            I am a full-stack developer and sometimes I do App development. I
            like to learn new things and create all sorts of things. 
            </Fade>
          </h3>   
          </Row>   
          <Row>
          <h3
            style={{ color: "rgb(168, 164, 164)", padding: "1em" }}            
          >
            <Fade right>          
           I love working
            in a team environment and I like to learn from others. Sometimes I
            also do a bit of Video Editing using Premire Pro.
            </Fade>
          </h3>   
          </Row>  
          </Row>  
                
        </Col>          
      </Row>
    </div>  */}