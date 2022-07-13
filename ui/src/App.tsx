import {useState} from 'react';
import Button from '@mui/material/Button';
import { Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';

export function App() {
  const [state,setState] = useState("");
  const[input,setInput] = useState("");
  async function handleClick() {
    if(input.length < 1 ){
      setState("")
      alert("Please Use Valid Link");
      return;
    }
    const {data} = await axios.get(input);
    setState(JSON.stringify(data,null,2));
  }
  return (
    <>
      <Typography variant="h3">Docker Desktop Request Mapper</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Click Fetch Data to make a call to an endpoint
      </Typography>
      <Stack alignItems="start" spacing={2} sx={{ mt: 4 }}>
      <TextField
          label="Base Url"
          sx={{ width: 480 }}
          multiline
          variant="outlined"
          minRows={1}
          value={input}
          onChange={(e)=> setInput(e.target.value)}
        />
        <Button variant="contained" onClick={handleClick}>
          Fetch Data
        </Button>
        <TextField
          label="Response :"
          sx={{ width: 480 }}
          disabled
          multiline
          variant="outlined"
          minRows={5}
          maxRows={20}
          value={state ? state : "None"}
        />
      </Stack>
    </>
  );
}
