import React, { useEffect ,useState } from "react";
import Fade from "react-reveal/Fade";
import "antd/dist/antd.css";
import { Row, Col, Card ,Typography  } from "antd";
import useWindowDimensions from '../hooks/useWindowDimensions'

const { Title } = Typography;

const cardStyle={ margin: "3%", height: "95%" ,backgroundColor:"#404040" ,cursor:"none"};
const cardPara={ textAlign: "left", color: "#F5F5F5" };

const Projects = () => {
  const {height,width}=useWindowDimensions();
  const [xsmal,setXmal]=useState(1);

  useEffect(()=>{
   if(width<400){
       setXmal(0);
   }
   else{
       setXmal(1);
   }   
  })
  
  return (
    <div id="projects">
      <Row style={{ marginTop: "8vh" }}>
        <Col xxl={5} xl={3} lg={3} xs={xsmal} md={3} sm={3} />
        <Col style={{ marginTop: "5px", padding: "5px" }}>
          <h1
            style={{
              fontSize: "5em",
              fontFamily: "monospace",
              color: "rgb(168, 164, 164)",
              marginLeft: "0.1em",
            }}
          >
            <b>              
              <Fade left>Projects</Fade>
            </b>
            <hr></hr>
          </h1>
        </Col>
      </Row>
      <Row style={{ marginTop: "13px" }}>
        <Col xxl={3} xl={3} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <Fade left>
          <Card                        
            style={cardStyle}
            bordered={false}
            hoverable={true}
            title={<Title level={3} style={{color:"whitesmoke"}}>Online IDE</Title>}
            extra={
              <a   
                target="_blank"             
                style={{ color: "white" }}
                href="https://github.com/hitenSharm/IDE-2.0"      
                rel="noreferrer"          
              >
                GitHub
              </a>
            }
          >
            <p              
              style={cardPara}
            >
              An Online IDE made using NodeJS for code execution. Docker was used to execute each code in a container. ReactJS,Redux for Frontend.
              User can also make an account and save code and edit them. Code is sent to NodeJS
              server where it is executed inside Docker container and validated for harmful content.
            </p>
            <p              
              style={cardPara}
            >
             Database used was MongoDB for Users and Codes.
             Can execute C++ and Python code.
            </p>
            <p              
              style={{
                textAlign: "left",
                color: "#F5F5F5",
                marginTop: "27px",
              }}
            >
              ReactJS NodeJS ExpressJS Docker MongoDB JWT Redux
            </p>
            <a href="https://www.codacy.com/gh/hitenSharm/IDE-2.0/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hitenSharm/IDE-2.0&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/e21f7aba824942fdb19ac572e776511e"/></a>
          </Card>  
          </Fade>        
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <Fade top>
          <Card                        
            style={cardStyle}
            bordered={false}
            hoverable={true}
            title={<Title level={3} style={{color:"whitesmoke"}}>TreactJS</Title>}
            extra={
              <a                
                target="_blank"                
                style={{ color: "white" }}
                href="https://github.com/hitenSharm/TreactJS"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p              
              style={cardPara}
            >
              A javscript framework which looks almost and works like ReactJS.
            </p>
            <p style={cardPara}>
            You can make componenets in a similar manner to ReactJS.            
            </p>
            <p style={cardPara}>
            Uses Fiber Tree data structure (similar to ReatJS) to render components for efficiently
            </p>
            <p              
              style={{
                textAlign: "left",
                color: "#F5F5F5",
                marginTop: "20px",
              }}
            >
              Javascript
            </p>
            <a href="https://www.codacy.com/gh/hitenSharm/TreactJS/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=hitenSharm/TreactJS&amp;utm_campaign=Badge_Grade"><img src="https://app.codacy.com/project/badge/Grade/e16640ddc77343b9a44dcb01fe203869"/></a>
          </Card>
          </Fade>
        </Col>
        <Col xxl={0} xl={0} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={0} xl={0} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <Fade right>
          <Card                        
            style={cardStyle}
            bordered={false}
            hoverable={true}
            title={<Title level={3} style={{color:"whitesmoke"}}>Pathfinding Site</Title>}
            extra={
              <a                
                target="_blank"                
                style={{ color: "white" }}
                href="https://github.com/hitenSharm/Pathfinding-Site"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p              
              style={cardPara}
            >
              You can see the implementation of BFS and DFS using simple JS.
                You can make walls (black) where the person can't visit.
                Cilck to create a wall.BFS will give shortest path and DFS will implement it's own search(Not always the shortest path)
                No diagonal movements were allowed.
            </p>            
            <p              
              style={{
                textAlign: "left",
                color: "#F5F5F5",
                marginTop: "20px",
              }}
            >
              HTML CSS Javascript
            </p>
            <a                
                target="_blank"                
                style={{ color: "white" ,cursor:"none" }}
                href="https://javascript.plainenglish.io/making-a-pathfinding-website-4796a83e35a6"
                rel="noreferrer"
              >
                <b>Medium Article</b>
              </a>
              <br></br>
            <a                
                target="_blank"                
                style={{ color: "white" ,cursor:"none" }}
                href="https://pathinamaze.hitensharma.repl.co/"
                rel="noreferrer"
              >
                <b>See Live</b>
              </a>
          </Card>
          </Fade>
        </Col>
        <Col xxl={0} xl={3} lg={3} xs={2} md={3} sm={3} />
        <Col xxl={9} xl={9} lg={4} xs={2} md={3} sm={3} />
        <Col xxl={6} xl={6} lg={16} xs={20} md={18} sm={18}>
            <Fade right>
          <Card                        
            style={cardStyle}
            bordered={false}
            hoverable={true}
            title={<Title level={3} style={{color:"whitesmoke"}}>Covid 19 Tracker</Title>}
            extra={
              <a                
                target="_blank"                
                style={{ color: "white" }}
                href="https://github.com/hitenSharm/CovidTracker"
                rel="noreferrer"
              >
                GitHub
              </a>
            }
          >
            <p              
              style={cardPara}
            >
              Track the number of patients of Covid 19 around the world. You can also see infromation regarding a particular country.
              ReactJS was used to gather that information using an API.
            </p>
            <img src='https://bettercodehub.com/edge/badge/hitenSharm/CovidTracker?branch=master'></img>
            <p              
              style={{
                textAlign: "left",
                color: "#F5F5F5",
                marginTop: "20px",
              }}
            >
              ReactJS              
            </p>            
            <a                
                target="_blank"                
                style={{ color: "white" ,cursor:"none" }}
                href="https://hitensharm.github.io/Covid19Tracker/"
                rel="noreferrer"
              >
                <b>See Live</b>
              </a>
              
          </Card>
          </Fade>
        </Col>
        </Row>
    </div>
  );
};

export default Projects;