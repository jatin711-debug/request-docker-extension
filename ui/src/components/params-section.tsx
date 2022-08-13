import { useState } from 'react';
import {TextField, Box, Button} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const ParamSection = () => {
  const [state,setState] = useState([<ParamField/>]);
  const handelClick = ()=>{
    setState((curr)=> [...curr,<ParamField/>])
  }
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      {state.map((data,index) => <div key={index}>{data}</div>)}
      <Button onClick={handelClick}>Add</Button>
    </Box>
  );
}

const ParamField = () =>{
  const handelDelete = () =>{
    alert("Clicked")
  }
  return (
    <Box component="div" sx={{display: 'flex',flexDirection: 'row',p:2}}>
      <TextField id="filled-basic" label="Key" variant="filled"/>
      <TextField id="filled-basic" label="value" variant="filled" />
      <Button onClick={handelDelete}><DeleteIcon/></Button>
    </Box>
  )
}

export default ParamSection