import Homepage from './Homepage.js'
import Dbutton from './Dbutton.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./styles.css"
function Form(){
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
      <TextField id="outlined-search" label="Front end port" type="search" />
      <TextField id="outlined-search" label="Back end port" type="search" />
        </div>
        </Box>
        <Homepage />
        <Dbutton/>
    </div>
    )
}
export default Form;