import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Row, Col, Image } from "antd";
import { ScrollPercentage } from 'react-scroll-percentage'

const Aboutme = () => {
  return (
    <div>
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
            <b> <Fade left>About Me </Fade>  </b>
            <hr></hr>
          </h1>         
        </Col>
      </Row>
      <Row>
        <Col xxl={5} xl={8} lg={3} xs={3} md={3} sm={3} />
        <Col          
          style={{ margin: "1em" }}
        >
          <Fade left>
          <Image
            width={270}
            src="https://i.imgur.com/3caPYag.png"
            alt="Hiten Sharma"
            style={{
              cursor:"none"
            }}
          />
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
    </div>
  );
};

export default Aboutme;
