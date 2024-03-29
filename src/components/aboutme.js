import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Row, Col, Image } from "antd";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useWindowDimensions from "../hooks/useWindowDimensions";

const Aboutme = () => {
  const { height, width } = useWindowDimensions();
  const [xsmal, setXmal] = useState(1);

  useEffect(() => {
    if (width < 400) {
      setXmal(0);
    } else {
      setXmal(1);
    }
  });

  return (
    <div id="aboutme">
      <Row style={{ marginTop: "17vh" }}>
        <Col xxl={5} xl={3} lg={3} xs={xsmal} md={3} sm={3} />
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
              <Fade left>About Me </Fade>{" "}
            </b>
            <hr></hr>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "10vh" }}>
        <Col xxl={5} xl={8} lg={3} xs={2} md={3} sm={3} />
        <Col style={{ margin: "1em" }}>
          <Fade left>            
            {/* <LazyLoadImage
              alt="My photo"
              style={{
                cursor: "none",
              }}
              width={290}
              threshold={100}
              effect="blur"
              placeholderSrc="https://i.imgur.com/CSR9IsU.jpg"
              src={"https://i.imgur.com/CSR9IsU.jpg"} // use normal <img> attributes as props
            /> */}
            <Image
            alt="My photo"
            style={{
              cursor: "none",
            }}
            width={290}
            src={"https://i.imgur.com/CSR9IsU.jpg"}
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
            <h3 style={{ color: "rgb(168, 164, 164)", padding: "1em" }}>
              <Fade right>
                I am Hiten Sharma. I am currently studying at Indian Institute
                of Information Technology Gwalior in the course
                Infromation Technology , also known as Computer Science.
              </Fade>
            </h3>
            <Row>
              <h3 style={{ color: "rgb(168, 164, 164)", padding: "1em" }}>
                <Fade right>
                  I am a full-stack developer and sometimes I do App
                  development. I like to learn new things and create all sorts
                  of things.
                </Fade>
              </h3>
            </Row>
            <Row>
              <h3 style={{ color: "rgb(168, 164, 164)", padding: "1em" }}>
                <Fade right>
                  I love working in a team environment and I like to learn from
                  others. Sometimes I also do a bit of Video Editing using
                  Premire Pro.
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
