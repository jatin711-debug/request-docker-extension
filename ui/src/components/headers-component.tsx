import {TextField,} from '@mui/material';
import { useContextBody } from '../contexts/context-handler';

const Headers = () => {
  const {inputHeaders ,setInputHeaders} = useContextBody();

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
          onChange={e=>setInputHeaders(e.target.value)}
          />     
    </div>
  )
}

export default Headers