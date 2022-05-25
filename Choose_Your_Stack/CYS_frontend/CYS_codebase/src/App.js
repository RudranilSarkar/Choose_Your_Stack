import "./styles.css";

import FrontDrop from "./Dropdown";
import Dropback from "./Drop2";
import Dropdata from "./Drop3";

import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState("Choose Front-End");
  const [selected2, setSelected2] = useState("Choose Back-End");
  const [selected3, setSelected3] = useState("Choose DataBase");
  return (
    <form action="">
    <div>
      <label for="textbox">Details             </label>
      <input type="text" name="detail" id="detail"  placeholder="Your Details.."/>
    </div>
    <div>
      <label for="textbox">Baal bichi Detail             </label>
      <input type="text" name="detail" id="detail"  placeholder="Your Details.."/>
    </div>
    <div className="App">
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
    
  </div>
  <button class="Download button2">DownloadButton</button>
  </form>
  );
}