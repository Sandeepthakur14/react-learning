import React from "react"
import ReactDom from "react-dom"
//import MyInfo from "./MyInfo.js"
import DummyLayout from "./DummyLayout.js";


function App(){
  return(    
    <div>
      <DummyLayout />        
    </div>
  );
}

ReactDom.render(<App />,document.getElementById("root"))