import {
    Checkbox, 
    Chip,
    Dialog, 
    DialogActions,
    DialogContent,
    DialogTitle, 
    FormControl,
    FormControlLabel, 
    FormLabel, 
    RadioGroup, 
    Stack 
  } from '@mui/material'
import { useState } from 'react'
import { VscClose } from 'react-icons/vsc'
import Radio from '@mui/material/Radio';
import { red, brown } from '@mui/material/colors';
import ChipsSchedule from './ChipsSchedule';


const ScheduleDsrModal = ({open, close}) => {

  return (
    <Dialog
    open= {open}
    onClose ={close}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    fullWidth={true}
    maxWidth="sm"
    className='schedule_header'
    >
        <DialogTitle  id="alert-dialog-title">
        <p className='p-0' style={{
              fontWeight:"500",
              fontSize:"19px",
              lineHeight:"24px",
              letterSpacing:".01em",
              color:"#181E25",
          }}>Schedule DSR</p>
         {/* <VscClose size={22} color='red' onClick={close} style={{position:"absolute",top:"0px",right:"0px",cursor:"pointer"}} /> */}
        </DialogTitle>
        <DialogContent>
          <p className='m-0'
            style={{
              fontWeight:"500",
              fontSize:"13px",
              lineHeight:"24px",
              letterSpacing:".01em",
              // padding:"0px 10px",
              color:"#6666"
            }}
          >Email List</p>
          <ChipsSchedule />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel 
                value="Daily" 
                control={<Radio
                  sx={{
                    color: brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                  />}
                label="Daily"/>
              <FormControlLabel
               value="weekly" 
               control={<Radio 
                sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
              />}
               label="Weekly" />
            </RadioGroup>
            <div className='checkbox'>
              {/*<Checkbox control={<Checkbox />} label="Booked" style={{color:"red"}}/> */}
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  sx={{
                    color:  brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                  />}
                label="Booked"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  sx={{
                    color:  brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                  />}
                label="In transit"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  sx={{
                    color: brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                />}
                label="Closed"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                   sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
                />}
                label="Arrived"
                labelPlacement="end"
              />
            </div>
         </FormControl>
        </DialogContent>
        <DialogActions>
          <div className="button_propety" style={{marginRight:"90px"}}>
            <button className='dsr_btn me-5'
              style={{
                padding:"5px 22px",
                border:"2px solid #F01E1E",
                backgroundColor:"#ffff",
                color:"#F01E1E",
                borderRadius:"7px",
                fontSize:"16px",
                fontWeight:"400",
                lineHeight:"23px",
                letterSpacing:".01em",
              }}
            >
              Unsubscribe DSR
            </button>
            <button 
              style={{
                padding:"5px 26px",
                border:"2px solid #F01E1E",
                backgroundColor:"#ffff",
                color:"#F01E1E",
                borderRadius:"7px",
                fontSize:"16px",
                fontWeight:"400",
                lineHeight:"23px",
                letterSpacing:".01em",
                marginRight:"10px"
              }}
            >
              Cancel
            </button>
            <button
              style={{
                padding:"5px 26px",
                backgroundColor:"#F01E1E",
                color:"#fff",
                border:"2px solid #F01E1E",
                borderRadius:"7px",
                fontSize:"16px",
                fontWeight:"400",
                lineHeight:"23px",
                letterSpacing:".01em"
              }}
            >
              Update
            </button>
          </div>
        </DialogActions>

    </Dialog>
  )
}

export default ScheduleDsrModal