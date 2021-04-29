import React from "react";
import { Row, Col , Menu } from "antd";
import "antd/dist/antd.css";

const style = {  cursor:"none" ,color:"white" , fontFamily:"monospace" , fontSize:"1.2em" ,backgroundColor:"#282c34" };
const style2={  cursor:"none" ,color:"white" , fontFamily:"monospace" , fontSize:"1.2em" ,backgroundColor:"#282c34" ,margin:"0"}

class Navbar extends React.Component {
    render(){
        return(  
    <Menu mode="horizontal" theme="dark" style={{border:0 ,backgroundColor:"#282c34"}}>
      <Menu.Item style={style2}><a href="#" style={style}>About Me</a></Menu.Item>
      <Menu.Item style={style2}><a href="#" style={style}>Skills</a></Menu.Item>
      <Menu.Item style={style2}><a href="#" style={style}>Projects</a></Menu.Item>
      <Menu.Item style={style2}><a href="#" style={style}>Resume</a></Menu.Item>      
    </Menu>
        );
    }
}
export default Navbar;