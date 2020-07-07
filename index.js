import React from "react"
import ReactDom from "react-dom"
import MyInfo from "./MyInfo.js"

function App(){
  return(    
      <MyInfo />  
  );
}

ReactDom.render(<App />,document.getElementById("root"))