import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,

} from "@mui/material";

import { useContextBody } from "../contexts/context-handler";

const BodySection = () => {

  const { bodyVal, changeBodyVal } = useContextBody();

  const handleBodyChange = (event) => {
    changeBodyVal(event.target.value);
    // console.log(bodyVal);
  };

  return (
    <div>
      <Box
        sx={{
          width: 150,
          m: 3,
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Body</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            placeholder="JSON"
            label="Raw"
            value="JSON"
            // onChange={handleChange}
          >
            <MenuItem value="JSON">JSON</MenuItem>
            <MenuItem value="JAVASCRIPT">JAVASCRIPT</MenuItem>
            <MenuItem value="HTML">HTML</MenuItem>
            <MenuItem value="TEXT">TEXT</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        label="Text :"
        sx={{ width: 480 }}
        multiline
        variant="outlined"
        minRows={5}
        onChange={handleBodyChange}
        value={bodyVal}
        placeholder="{ 'key' : 'value' }"
      />
      {/* <Button onClick={(e) => bodyChangeHandler(e)}>Add Body</Button> */}
    </div>
  );
};

export default BodySection;
