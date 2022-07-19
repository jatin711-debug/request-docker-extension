import {useState} from 'react';
import Button from '@mui/material/Button';
import { Stack, TextField, Typography, MenuItem, InputLabel, Box, FormControl } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {requestStates, createHttpRequest} from "./helpers/request-state";
export function App() {
  const [state,setState] = useState("");
  const [input,setInput] = useState("");
  const [requestType, setRequestType] = useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setRequestType(event.target.value as string);
  };
  async function handleClick() {
    if(input.length < 1){
      setState('')
      alert("Please Use Valid Link");
      return;
    }
    const {data} = await createHttpRequest(requestType,input,{name:"Jatin",age:12});
    setState(JSON.stringify(data,null,2));
  }
  return (
    <>
      <Typography variant="h3">Docker Desktop Request Mapper</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Click Fetch Data to make a call to an endpoint
      </Typography>
      <Box sx={{ minWidth: 240, mt:5 }}>
      <FormControl>
        <InputLabel sx={{ width:240 }} id="simple-select-label">RequestType</InputLabel>
        <Select
          labelId="simple-select-label"
          id="simple-select"
          onChange={handleChange}
          value={requestType}
          defaultValue="None"
          sx = {{ width: 480 }}
        >
          { requestStates.map(state => <MenuItem key={state.type} value={state.type}>{state.type}</MenuItem>) }
        </Select>
      </FormControl>
    </Box>
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
