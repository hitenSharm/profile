import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Typewriter from "typewriter-effect";
import TextTransition, { presets } from "react-text-transition";

import "./name.css";

const TEXTS = [
  "MERN STACK",
  "Sometimes DS & Algo",
  "Sometimes Flutter",
  "Connect With me!",
];

function Name() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

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
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.wobbly}
                noOverflow
                inline
              />
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
}

export default Name;
