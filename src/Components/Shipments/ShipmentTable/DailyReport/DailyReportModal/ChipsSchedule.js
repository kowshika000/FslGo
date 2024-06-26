import React, { useState } from 'react'
import { Autocomplete, Chip, Input, Stack, TextField } from '@mui/material'

const ChipsSchedule = ({setforminputs,forminputs}) => {
    const [receivers, setReceivers] = useState([]);

    const top100Films = []
    
  return (
    <Autocomplete
        multiple
        limitTags={2}
        // onChange={(e, value) => setforminputs((prev)=>[{...prev,emails:[value]}])}
        style={{marginBottom:"10px"}}
        id="multiple-limit-tags"
        // options={forminputs.emails?.map((option) => option)}
        freeSolo
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            placeholder="New email"
            sx={{width:"500px"}}
          />
        )}
      />
  )
}

export default ChipsSchedule