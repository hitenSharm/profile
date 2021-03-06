import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import axios from 'axios'
import "antd/dist/antd.css";
import CountUp from 'react-countup';

const Count = () =>{
   var [cnt,setCnt]=useState(0)   
    useEffect(()=>{
        var ans;
        async function count(){            
            await axios.get('https://api.countapi.xyz/hit/netify.com/HitenSharmaWebSite').then((result) =>{             
             ans = result.data.value;       
             setCnt(ans)
             });                        
        }
        count();        
        setCnt(ans)
    },[])

    return(
        <div>
            <Row type="flex" style={{justifyContent:"center" ,marginTop:"5vh"}}>
                <Col style={{color:"#e6ccff" ,fontFamily:"monospace" ,fontStyle:"italic",fontSize:"2em"}}>
                Website visits
                </Col>                
            </Row>
            <Row type="flex" style={{justifyContent:"center" ,marginTop:"3vh"}}>
                <Col style={{color:"#e6ccff" ,fontFamily:"monospace" ,fontStyle:"italic",fontSize:"2em"}}>
                <CountUp end={cnt || 0} />
                <hr style={{backgroundColor:"#e6ccff"}}></hr>
                </Col>                
            </Row>
        </div>
    );
}

export default Count;