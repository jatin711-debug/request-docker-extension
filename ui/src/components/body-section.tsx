import { TextField, Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

import { useContextBody } from "../contexts/context-handler";

const BodySection = () => {
  const { bodyVal, setBodyVal } = useContextBody();

  return (
    <Box component="form" noValidate autoComplete="off">
      <Box
        sx={{
          width: 150,
          m: 3,
        }}
      ></Box>
      <TextField
        label="JSON :"
        sx={{ width: 480 }}
        multiline
        variant="outlined"
        minRows={5}
        onChange={(e)=> setBodyVal(e.target.value)}
        value={bodyVal}
        placeholder="{ 'key' : 'value' }"
      />

    </Box>
  );
};

export default BodySection;
