import { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useContextBody } from '../contexts/context-handler';
const ParamSection = () => {
  const [state,setState] = useState({key:"",val:""});
  const { key,val } = state;
  const {baseUrl,setBaseUrl} = useContextBody();
  
  const handelClick = ()=>{
    setState({key:"",val:""});
    setBaseUrl(`${baseUrl}&${key}=${val}`)
  }
  const handelDelete = ()=>{
    setState({key:"",val:""});
  }

  const handelChange = (name:String) => (e:any)=>{
    setState({...state,[name.toString()]:e.target.value})
  } 

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Box component="div" sx={{display: 'flex',flexDirection: 'row',p:2}}>
        <TextField
        onChange={ handelChange('key') }
        value={key} id="filled-basic" label="Key" variant="filled" name="key"/>
        <TextField 
        onChange={ handelChange('val') }
        value={val} id="filled-basic" label="val" variant="filled" name="val"/>
      <Button onClick={handelDelete}><DeleteIcon/></Button>
    </Box>
      <Button onClick={handelClick}>Add</Button>
    </Box>
  );
}

export default ParamSection;