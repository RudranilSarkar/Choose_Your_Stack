import Dbutton from './Dbutton.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FrontDrop from "./Dropdown";
import Dropback from "./Dropback";
import Dropdata from "./Dropdata";
import "./styles.css"
import { useState } from "react";
function Form(){
  const [f_port, setF_port] = useState('');
  const [b_port, setB_port] = useState('');
  const [selected, setSelected] = useState("Choose Front-End");
  const [selected2, setSelected2] = useState("Choose Back-End");
  const [selected3, setSelected3] = useState("Choose DataBase");
    return(
        
    <div>
        <div>
        <label htmlFor="textbox">Choose Your Stack</label>
        </div>
        <Box component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField id="f_port" label="Front end port" type="search" onChange={e => setF_port(e.target.value)}/>
      <TextField id="b_port" label="Back end port" type="search" onChange={e => setB_port(e.target.value)}/>
        </div>
        </Box>
    <div>
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
    <Dbutton f_port={f_port} b_port={b_port} f_name={selected} b_name={selected2} db_name={selected3}/>
    </div>
    )
}
export default Form;