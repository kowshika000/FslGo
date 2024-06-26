import React, { useState } from 'react'
import { Autocomplete, Chip, Input, Stack, TextField } from '@mui/material'

const ChipsSchedule = () => {
    const [receivers, setReceivers] = useState([]);

    const top100Films = []
    
  return (
    <Autocomplete
        multiple
        limitTags={2}
        onChange={(e, value) => setReceivers((state) => value)}
        id="multiple-limit-tags"
        options={top100Films.map((option) => option)}
        defaultValue={[top100Films]}
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