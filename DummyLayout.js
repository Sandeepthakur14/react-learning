import React from "react";
import Header from "./header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

export default function DummyLayout(){
  return(
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}