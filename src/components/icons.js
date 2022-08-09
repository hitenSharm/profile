import React from "react";
import { Row, Col } from "antd";
import { GithubOutlined,InstagramOutlined,LinkedinOutlined,MailOutlined } from '@ant-design/icons'
import Fade from 'react-reveal/Fade';

const style={margin:"5px" , cursor:"none"};

const Links = () =>{
    return(
        <div>            
            <Row type="flex" style={{justifyContent:"center" ,marginTop:"2vh"}}>            
            <Col style={{display:"flex",flexDirection:"row"}}>
            <a href="https://github.com/hitenSharm" style={style}>
            <Fade left>
            <div style={{fontSize:"4rem",color:"#78c4b8"}}>
            <GithubOutlined/>
            </div>
            </Fade>
            </a>
            <a href="https://www.instagram.com/hiten_sharma17" style={style}>
            <Fade left>
            {/* <img src="https://i.imgur.com/7bCU9FL.png" width="70px" alt="Insta Hiten Sharma"></img> */}
            <div style={{fontSize:"4rem",color:"#78c4b8"}}>
            <InstagramOutlined />
            </div>
            </Fade>
            </a>
            <a href="https://www.linkedin.com/in/hiten-sharma-775879192" style={style}>
            <Fade right>
            {/* <img src="https://i.imgur.com/FQKtd0K.png" width="70px" alt="LinkedIn Hiten Sharma"></img> */}
            <div style={{fontSize:"4rem",color:"#78c4b8"}}>
            <LinkedinOutlined />
            </div>
            </Fade>
            </a>            
            <a href="mailto:hiten.sharm1708@gmail.com" style={style}>
            <Fade right>
            {/* <img src="https://seeklogo.com/images/G/gmail-logo-0240527C35-seeklogo.com.png" width="70px" alt="Gmail Hiten Sharma"></img> */}
            <div style={{fontSize:"4rem",color:"#78c4b8"}}>
            <MailOutlined />
            </div>
            </Fade>
            </a> 
            </Col>
            </Row>
        </div>
    );
}

export default Links;