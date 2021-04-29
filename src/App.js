import React from "react";
import AnimatedCursor from "react-animated-cursor";
import Bigcomponent from "./components/Bigcomponent";

const App = () => {
  return (
    <div style={{backgroundColor:"#282c34" , width:"100%" , height:"100%" ,overflowX:"hidden"}}>      
      <AnimatedCursor/>       
      <Bigcomponent/>         
    </div>
  );
};

export default App;
