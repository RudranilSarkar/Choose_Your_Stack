import FrontDrop from "./Dropdown";
import Dropback from "./Dropback";
import Dropdata from "./Dropdata";
import React from "react";
import { useState } from "react";
function Homepage(){
  
    const [selected, setSelected] = useState("Choose Front-End");
    const [selected2, setSelected2] = useState("Choose Back-End");
    const [selected3, setSelected3] = useState("Choose DataBase");
    return( <div className="homepage">
    {/* Frontend custom dropdown menu */}
    <FrontDrop selected={selected} setSelected={setSelected} />
    
    <br />
    <br />
    <br />
    
  {/* Backend custom dropdown menu */}
  <Dropback selected={selected2} setSelected={setSelected2} />
  
  <br />
  <br />
  <br />
  
  {/* DataBase custom dropdown menu */}
  <Dropdata selected={selected3} setSelected={setSelected3} />
  
  <br />
  <br />
  <br />
  
  </div>)
  }
  export default Homepage;