import React from "react";
import { Row, Col, Menu } from "antd";
import Layout, { Header } from "antd/lib/layout/layout";
import "antd/dist/antd.css";
// import useWindowDimensions from '../hooks/useWindowDimensions'


var Scroll = require("react-scroll");
var Link = Scroll.Link;
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
  margin:"0"  
};

const Navbar = () => {

  return (
    <Row style={{ height: "100%", marginTop: "1%" }}>
    <Col xxl={2} xl={2} lg={2} xs={1} md={2} sm={1} />
    <Col xxl={18} xl={18} lg={18} xs={22} md={20} sm={22}>            
      <Menu
mode="horizontal"
theme="dark"
style={{ border: 0, backgroundColor: "#282c34" ,margin:"0.1em" }}      
>
<Menu.Item style={style2}>
  <Link            
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
<Link            
    to="skills"
    spy={true}
    smooth={true}
    duration={500}
    style={style}
  >
    Skills
  </Link>
</Menu.Item>
<Menu.Item style={style2}>
<Link            
    to="projects"
    spy={true}
    smooth={true}
    duration={500}
    style={style}
  >
    Projects
  </Link>
</Menu.Item>
<Menu.Item style={style2}>
  <a target="_blank" href="https://drive.google.com/file/d/15Y6LNI8RVMk1A3C_BZeurb1DFR9dNYQK/view?usp=sharing" style={style}>
    Resume
  </a>
</Menu.Item>
</Menu>
    </Col>
    <Col xxl={4} xl={4} lg={4} xs={1} md={2} sm={1} />
  </Row>
  );
}
export default Navbar;

{/* <Menu
      mode="horizontal"
      theme="dark"
      style={{ border: 0, backgroundColor: "#282c34" }}
      breakpoint="xs"
    >
      <Menu.Item style={style2}>
        <Link            
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
      <Link            
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          style={style}
        >
          Skills
        </Link>
      </Menu.Item>
      <Menu.Item style={{
          cursor: "none",
          color: "white",
          fontFamily: "monospace",
          fontSize: "1.2em",
          backgroundColor: "#282c34",
          marginLeft: {marginL} +"em",
      }}>
      <Link            
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          style={style}
        >
          Projects
        </Link>
      </Menu.Item>
      <Menu.Item style={style2}>
        <a target="_blank" href="https://drive.google.com/file/d/15Y6LNI8RVMk1A3C_BZeurb1DFR9dNYQK/view?usp=sharing" style={style}>
          Resume
        </a>
      </Menu.Item>
    </Menu> */}