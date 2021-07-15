import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Bigcomponent from "./components/Bigcomponent";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import useWindowDimensions from "./hooks/useWindowDimensions";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const App = () => {
  const [isLoaded, setIsLoaded] = useState(true);  

  var widthScreen=useWindowDimensions().width;
  var heightScreen=useWindowDimensions().height;

  useEffect(() => {    
    setTimeout(() => setIsLoaded(false), 2000)
  }, []);  

  return (
    <>
      {isLoaded ? (
        <div style={{
          height:heightScreen,
          width:widthScreen,
          display:"flex",
          justifyContent:"center",
          alignItems:"center"
        }}>
          <AnimatedCursor />
          <HashLoader
            loading={isLoaded}
            css={override}
            size={150}
            color="#bad6c2"
          />
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "#282c34",
            width: "100%",
            height: "100%",
            overflowX: "hidden",
          }}
        >
          <AnimatedCursor />
          <Bigcomponent />
        </div>
      )}
    </>
  );
};

export default App;
