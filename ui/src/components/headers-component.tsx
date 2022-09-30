import {TextField, FormControl, Button} from '@mui/material';
import { json } from 'node:stream/consumers';
import {useState , useContext} from 'react'

import { useContextBody } from '../contexts/context-handler';

const Headers = () => {
  const {baseUrl,setBaseUrl} = useContextBody();
  const [inputHeaders,setInputHeaders]=useState('{ \n\n }');

  let headers="";

  function jsonHandler(event: { target: { value: any; }; }){
    setInputHeaders(event.target.value)
  }
  
  
  function headersSubmitHandler(event)
  {
    event.preventDefault();
    const finalHeaders=JSON.parse(inputHeaders)
    console.log(finalHeaders);
    setInputHeaders('{ \n\n}');
    console.log(baseUrl);
  }

  return (
    <div>
      
        <TextField
          label="JSON :"
          sx={{ width: 480 }}
          
          multiline
          variant="outlined"
          minRows={5}
          placeholder="{
            'key':'value',
          }"
          value={inputHeaders}
          
          onChange={jsonHandler}
          />
        
      <Button onClick={headersSubmitHandler}>Add</Button>
      
    </div>
  )
}

export default Headers