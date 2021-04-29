import React, { useEffect, useState } from "react";
import countapi from 'countapi-js';
import { Row, Col } from "antd";
import axios from 'axios'
import "antd/dist/antd.css";

const Count = () =>{
   var [cnt,setCnt]=useState(0)   
    useEffect(()=>{
        var ans;
        async function count(){            
            await axios.get('https://api.countapi.xyz/hit/netlify.com/Hiten').then((result) =>{
             console.log(result.data.value)  
             ans = result.data.value;       
             setCnt(ans)
             });                        
        }
        count();        
        setCnt(ans)
    },[])

    return(
        <div>
            <Row type="flex" style={{justifyContent:"center" ,marginTop:"3vh"}}>
                <Col style={{color:"#e6ccff" ,fontFamily:"monospace" ,fontStyle:"italic",fontSize:"2em"}}>
                Website visits
                </Col>                
            </Row>
            <Row type="flex" style={{justifyContent:"center" ,marginTop:"3vh"}}>
                <Col style={{color:"#e6ccff" ,fontFamily:"monospace" ,fontStyle:"italic",fontSize:"2em"}}>
                {cnt}
                </Col>                
            </Row>
        </div>
    );
}

export default Count;