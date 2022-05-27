import Homepage from './Homepage.js'
import Dbutton from './Dbutton.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css"
import { useState } from "react";
function Form(){
  const [f_port, setF_port] = useState('');
  const [b_port, setB_port] = useState('');
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
        <Homepage />
        <Dbutton f_port={f_port} b_port={b_port}/>
    </div>
    )
}
export default Form;