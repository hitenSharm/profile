import React, { useEffect, useState } from "react";
import { FliesText} from "react-text-fun";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";
import "antd/dist/antd.css";
import "./name.css";


function Name() {
  return (
    <div>
    <Row
      style={{     
        marginTop:"3vh",   
        marginRight: "0.5em",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Row style={{marginTop:"7vh"}}/>
      <Row>
        <Col>
          <div
            style={{ color: "white", fontFamily: "unispace", fontSize: "2em" }}
          >            
            Hello I am
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <FliesText
            cellRadius={0.5}
            text="Hiten"
            fontSize={130}
            cellWidth={0.02}
            speed={2}
            dodge={false}
            fill="#ffffff"
          />
        </Col>
      </Row>
      <Row>
        <Col>
        <div
            style={{ color: "white", fontFamily: "monospace", fontSize: "2em" }}
          >
            <Typewriter
              style={{
                color: "blue",
              }}
              onInit={(typewriter) => {
                typewriter.typeString("MERN STACK")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Sometimes Flutter")                
                .pauseFor(1000)
                .deleteAll()
                .typeString("Sometimes DS & Algo")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Connect With me!")
                .start();
              }}
            />
          </div>
        </Col>
      </Row>
    </Row>   
    </div>
  );
}

export default Name;
