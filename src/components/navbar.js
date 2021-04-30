import React from "react";
import { Row, Col, Menu } from "antd";
import "antd/dist/antd.css";

var Scroll = require("react-scroll");
var Link = Scroll.Link;
var Button = Scroll.Button;
var Element = Scroll.Element;
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

const style = {
  cursor: "none",
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.2em",
  backgroundColor: "#282c34",
};
const style2 = {
  cursor: "none",
  color: "white",
  fontFamily: "monospace",
  fontSize: "1.2em",
  backgroundColor: "#282c34",
  margin: "0",
};

class Navbar extends React.Component {
  render() {
    return (
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ border: 0, backgroundColor: "#282c34" }}
      >
        <Menu.Item style={style2}>
          <Link
            className="test6"
            to="aboutme"
            spy={true}
            smooth={true}
            duration={500}
            style={style}
          >
            About Me
          </Link>
        </Menu.Item>
        <Menu.Item style={style2}>
          <a href="#" style={style}>
            Skills
          </a>
        </Menu.Item>
        <Menu.Item style={style2}>
          <a href="#" style={style}>
            Projects
          </a>
        </Menu.Item>
        <Menu.Item style={style2}>
          <a href="#" style={style}>
            Resume
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}
export default Navbar;
