import React from "react";
import Fade from "react-reveal/Fade";
import { Row, Typography } from "antd";
import { FaPython,FaDocker, } from 'react-icons/fa';
import {SiFlutter,SiGitlab,SiGithub,SiGit,SiFirebase,SiNetlify,SiJavascript,SiHeroku,SiDart,SiCplusplus,SiNodedotjs,SiExpress,SiReact,SiTypescript,SiMongodb,SiMysql,SiRedux,SiAntdesign} from 'react-icons/si'


const SkillItem = (props) => {
  const title = props.title;
  const data = props.data;

  const returnIcons = (skill) =>{
    if(skill==="Languages"){
      return(
        <>
          <FaPython style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />          
          <SiJavascript style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em"/>
          <SiDart style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em"/>          
          <SiCplusplus style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em"/>
        </>
      );
    }
    if(skill === "Web"){
      return(
        <>
        <SiNodedotjs style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />          
        <SiExpress style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />          
        <SiTypescript style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />          
        <SiReact style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />   
        <SiRedux style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        <SiAntdesign style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        </>
      );
    }
    if(skill==="Databases"){
      return(
        <>
        <SiMongodb style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />          
        <SiMysql style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />          
        </>
      );
    }
    if(skill === "DevOps"){
      return(
        <>
        <FaDocker style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" />         
        </>
      );
    }
    if(skill==="Tools"){
      return(
        <>
        <SiHeroku style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        <SiNetlify style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        <SiFirebase style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        <SiGit style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        <SiGithub style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        <SiGitlab style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        </>
      );
    }
    if(skill === "App Dev"){
      return(
        <>
        <SiFlutter style={{ color: "rgb(168, 164, 164)",marginRight:"5.5px" }} fontSize="2.5em" /> 
        </>
      );
    }
    return <></>
  }

  return (
    <Row style={{ justifyContent: "center", textAlign: "center" }}>      
        <Fade right>
          <h3>
          {/* <h1
            style={{
              color: "white",
              paddingTop: "0.1em",
              textDecoration: "underline",
            }}
          >
            {title}
          </h1> */}
          <Typography.Title level={2} style={{
            color: "white",
            paddingTop: "0.1em",
          }}>{title}</Typography.Title>
          <Fade left>
            {/* <p style={{ color: "rgb(168, 164, 164)" }}>{data}</p> */}
            {returnIcons(title)}
          </Fade>
          </h3>
        </Fade>
      
    </Row>
  );
};

export default SkillItem;
