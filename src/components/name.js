import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";

import "./name.css";
import EarthCanvas from "./Earth";


function Name() {  

  return (
    <div>      
      <Row
        style={{
          marginTop: "3vh",
          marginRight: "0.5em",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Row style={{ marginTop: "7vh" }} />
        <Row>
          <Col>
            <div className="headingName">Hello I am</div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="titleName">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString("Hiten").start();
                }}
              />              
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              style={{
                color: "white",
                fontSize: "2rem",
              }}
              className="textTransition"
            >              
              <EarthCanvas/>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Name;
