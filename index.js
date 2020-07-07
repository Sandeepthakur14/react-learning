import React from "react"
import ReactDom from "react-dom"
import Hello from "./Hello.js"

function App(){
  return(    
      <Hello />  
  );
}

ReactDom.render(<App />,document.getElementById("root"))