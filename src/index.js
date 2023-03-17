import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import WebfontLoader from '@dr-kobros/react-webfont-loader';
import "antd/dist/antd.css";

const config = {
  google: {
    families: ['Rock Salt','Reenie Beanie','Indie Flower'],
  }
};

ReactDOM.render(
  <React.Fragment>
    {/* <WebfontLoader config={config}>
       
    </WebfontLoader> */}
    <App /> 
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
