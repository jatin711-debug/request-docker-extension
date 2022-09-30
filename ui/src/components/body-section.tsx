import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Button,
} from "@mui/material";

import { useState } from "react";

const BodySection = () => {
  const [bodyVal, changeBodyVal] = useState(null);
  let finalBody;
  const bodyHandler = (event) => {
    changeBodyVal(event.target.value);
  };

  const bodyChangeHandler = (event) => {
    event.preventDefault();
    finalBody=JSON.parse(bodyVal)
    console.log(typeof(finalBody));
    changeBodyVal('')
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
            <MenuItem value="JSON" >JSON</MenuItem>
            <MenuItem value="JAVASCRIPT" >JAVASCRIPT</MenuItem>
            <MenuItem value="HTML" >HTML</MenuItem>
            <MenuItem value="TEXT" >TEXT</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <TextField
        label="Text :"
        sx={{ width: 480 }}
        multiline
        variant="outlined"
        minRows={5}
        onChange={bodyHandler}
        value={bodyVal}
      />
      <Button onClick={bodyChangeHandler}>Add Body</Button>
    </div>
  );
};

export default BodySection;
