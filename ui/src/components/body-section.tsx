import { TextField, Box, Button } from "@mui/material";
import { useContextBody } from "../contexts/context-handler";

const BodySection = () => {
  const { bodyValue, setBodyValue } = useContextBody();
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
        onChange={(e)=> setBodyValue(e.target.value)}
        value={bodyValue}
        placeholder="{ 'key' : 'value' }"
      />

    </Box>
  );
};

export default BodySection;
