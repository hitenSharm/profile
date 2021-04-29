import React from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Row, Col, Image } from "antd";
import { DistortionText } from 'react-text-fun'

const Aboutme = () => {
  return (
    <div>
        <Row style={{marginTop:"20vh"}}>
        <Col xxl={5} xl={3} lg={3} xs={3} md={3} sm={3} />
            <Col style={{marginTop:"5px",padding:"5px"}}>
            <DistortionText
  text="About Me"
  fontSize={90}
  speed={1.5}
  rotation={45.0}
  distortX={0}
  distortY={0.2}
  noiseAmplitude={0.2}
  noiseVolatility={0.2}
  fill={"white"}
  fontFamily={"monospace"}
/>
            </Col>
        </Row>
      <Row>
        <Col xxl={5} xl={8} lg={3} xs={3} md={3} sm={3} />
        <Col style={{ margin: "1em" }}>
          <Fade left>
            <Image width={270} src="https://i.imgur.com/3caPYag.png" />
          </Fade>
        </Col>
        <Col
          xxl={9}
          xl={9}
          lg={12}
          md={9}
          style={{ display: "flex", alignItems: "center" }}
        >
          <Fade right>
            <h3 style={{ color: "rgb(168, 164, 164)", padding: "1em" }}>
              I am a full-stack developer and sometimes I do App development. I
              like to learn new things and create all sorts of things. Sometimes
              I also do a bit of Video Editing using Premire Pro.
              
            </h3>
          </Fade>
        </Col>
      </Row>
    </div>
  );
};

export default Aboutme;
