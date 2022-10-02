import {TextField, Button} from '@mui/material';

import {useState } from 'react'

import { useContextBody } from '../contexts/context-handler';

const Headers = () => {
  // const {baseUrl,setBaseUrl} = useContextBody();
  const [inputHeaders,setInputHeaders]=useState(null);

  let headers="";

  function jsonHandler(event: { target: { value: any } }){
    setInputHeaders(event.target.value)
  }
  
  function headersSubmitHandler(event)
  {
    event.preventDefault();
    headers=JSON.parse(inputHeaders)

    console.log(typeof(headers))
    setInputHeaders(null)

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