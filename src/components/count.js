import React, { useEffect, useState } from "react";
import { Row, Col, Typography } from "antd";
import axios from "axios";
import CountUp from "react-countup";
import "./count.css";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const style = {
  cursor: "none",    
  margin:"2em",
  backgroundColor: "#282c34",
};

const Count = () => {
  return (
    <div>
      <Row type="flex" style={{ justifyContent: "center", marginTop: "5vh" }}>
        <Link
          to="aboutme"
          spy={true}
          smooth={true}
          duration={500}
          style={style}          
        >
          <div class="scroll-down svg" id="home-scroll-down">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_2"
              x="0px"
              y="0px"
              viewBox="0 0 25.166666 37.8704414"
              enable-background="new 0 0 25.166666 37.8704414"
            >
              <path
                class="stroke"
                fill="none"
                stroke="#c7c4b8"
                stroke-width="2.5"
                stroke-miterlimit="10"
                d="M12.5833445 36.6204414h-0.0000229C6.3499947 36.6204414 1.25 31.5204487 1.25 25.2871208V12.5833216C1.25 6.3499947 6.3499951 1.25 12.5833216 1.25h0.0000229c6.2333269 0 11.3333216 5.0999947 11.3333216 11.3333216v12.7037992C23.916666 31.5204487 18.8166714 36.6204414 12.5833445 36.6204414z"
              ></path>
              <path
                class="scroller"
                fill="#c7c4b8"
                d="M13.0833359 19.2157116h-0.9192753c-1.0999985 0-1.9999971-0.8999996-1.9999971-1.9999981v-5.428606c0-1.0999994 0.8999987-1.9999981 1.9999971-1.9999981h0.9192753c1.0999985 0 1.9999981 0.8999987 1.9999981 1.9999981v5.428606C15.083334 18.315712 14.1833344 19.2157116 13.0833359 19.2157116z"
              ></path>
            </svg>
            <i class="icon icon-arrow-down"></i>
          </div>
        </Link>
      </Row>
    </div>
  );
};

export default Count;
