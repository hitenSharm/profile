import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Fade from 'react-reveal/Fade';

const style={margin:"5px" , cursor:"none"};

const Links = () =>{
    return(
        <div>            
            <Row type="flex" style={{justifyContent:"center" ,marginTop:"2vh"}}>            
            <Col>
            <a href="https://github.com/hitenSharm" style={style}>
            <Fade right>
            <img src="https://i.imgur.com/15kSpho.png" width="80px" alt="Github Hiten Sharma"></img>
            </Fade>
            </a>
            <a href="https://www.instagram.com/hiten_sharma17" style={style}>
            <Fade left>
            <img src="https://i.imgur.com/7bCU9FL.png" width="70px" alt="Insta Hiten Sharma"></img>
            </Fade>
            </a>
            <a href="https://www.linkedin.com/in/hiten-sharma-775879192" style={{margin:"6px" , cursor:"none"}}>
            <Fade top>
            <img src="https://i.imgur.com/FQKtd0K.png" width="70px" alt="LinkedIn Hiten Sharma"></img>
            </Fade>
            </a>            
            </Col>
            </Row>
        </div>
    );
}

export default Links;