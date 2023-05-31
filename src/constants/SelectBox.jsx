import * as React from 'react';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

 function SelectBox({onchangeHandler,array,defaultValue, title, placeholder}) {

  return (
    <Stack spacing={2} sx={{ width: "auto" }}>
      <Autocomplete
        id="size-small-outlined"
        size="small"
        options={array}
        onChange={(event, value)=>onchangeHandler(event, value)}
        getOptionLabel={(option) => option[title]}
        defaultValue={array[defaultValue]}
        renderInput={(params) => (
          <TextField {...params}  placeholder={placeholder}   />
        )}
      />
    </Stack>
  );
}
export default SelectBox

{/* <SelectBox onchangeHandler={setSelect} array={[{ title: "moin", id: 1 }]} defaultValue={{ title: "zack", id: 1 }} title="title" placeholder="Select Patient" /> */}
