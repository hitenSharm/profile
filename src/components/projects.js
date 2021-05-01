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
              marginLeft: "25px",
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
                href="https://github.com/hitenSharm/Online-IDE"                
              >
                GitHub
              </a>
            }
          >
            <p              
              style={cardPara}
            >
              An Online IDE made using NodeJS for code execution and ReactJS for Frontend.
              ReactJS frontend connects to NodeJS server using the exposed endpoints. Code is sent to NodeJS
              server where it is executed and validated for harmful content.
            </p>
            <p              
              style={cardPara}
            >
             Output is sent back in JSON format to ReactJS frontend which then renders the output.
             Can execute Python and Javascript code.
            </p>
            <p              
              style={{
                textAlign: "left",
                color: "#F5F5F5",
                marginTop: "27px",
              }}
            >
              ReactJS NodeJS ExpressJS
            </p>
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
            title={<Title level={3} style={{color:"whitesmoke"}}>Discord Bot</Title>}
            extra={
              <a                
                target="_blank"                
                style={{ color: "white" }}
                href="https://github.com/hitenSharm/Dicord-Meme-Bot"
              >
                GitHub
              </a>
            }
          >
            <p              
              style={cardPara}
            >
              A Discord Bot hosted on Heroku. Can be used to do reverse image search , send memes using Reddit API , send gifs using Tenor API.
              It can also send quotes along with Rich Embed for good looking messages.
            </p>
            <img src='https://bettercodehub.com/edge/badge/hitenSharm/Dicord-Meme-Bot?branch=main'></img>
            <p              
              style={{
                textAlign: "left",
                color: "#F5F5F5",
                marginTop: "20px",
              }}
            >
              DiscordJS NodeJS
            </p>
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
              >
                <b>Medium Article</b>
              </a>
              <br></br>
            <a                
                target="_blank"                
                style={{ color: "white" ,cursor:"none" }}
                href="https://pathinamaze.hitensharma.repl.co/"
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