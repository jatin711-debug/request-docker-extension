import {
  Stack,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  Box,
  FormControl,
  Button,
} from "@mui/material";
import {
  requestStates,
  createHttpRequest,
  validateRequest,
} from "./helpers/request-state";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useContextBody } from "./contexts/context-handler";
import BasicTabs from "./components/tabs-component";
import { useState } from "react";

export function App() {
  const { baseUrl, setBaseUrl, bodyVal ,inputHeaders} = useContextBody();

  const [state, setState] = useState("");
  const [requestType, setRequestType] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setRequestType(event.target.value as string);
  };
  async function handleClick() {
    if (!validateRequest(baseUrl)) {
      setState("");
      alert("Please Use Valid Link");
      return;
    }

    const finalBody = JSON.parse(bodyVal);
    const finalHeaders = JSON.parse(inputHeaders);
    const { data } = await createHttpRequest(requestType, baseUrl , finalBody ,finalHeaders);
    console.log(data);
    setState(JSON.stringify(data, null, 2));
    console.log(typeof(data));
  }
  return (
    <>
      <Typography variant="h3">Docker Desktop Request Mapper</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        Click Fetch Data to make a call to an endpoint
      </Typography>
      <Box sx={{ minWidth: 240, mt: 5 }}>
        <FormControl>
          <InputLabel sx={{ width: 240 }} id="simple-select-label">
            RequestType
          </InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            onChange={handleChange}
            value={requestType}
            defaultValue="None"
            sx={{ width: 480 }}
          >
            {requestStates.map((state) => (
              <MenuItem key={state.type} value={state.type}>
                {state.type}
              </MenuItem>
            ))}
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
          value={baseUrl}
          onChange={(e) => setBaseUrl(e.target.value)}
        />
        <BasicTabs />
        <Button variant="contained" onClick={handleClick}>
          Send
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
