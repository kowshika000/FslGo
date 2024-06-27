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

  const [selected, setSelected] = useState([]);
  const [forminputs, setforminputs] = useState(
    {
      schedulebasis:"",
      weeklydates:{
        mon:false,
        tue:false,
        wed:false,
        thu:false,
        fri:false,
        sat:false,
        sun:false,
      },
      
    }
  )
  const [status,setStatus] = useState({
    booked:false,
    intransit:false,
    closed:false,
    arrived:false,
  })


const handleDays =(e)=>{
  setforminputs((prev)=>{
    console.log(prev)
    return {...prev,weeklydates:{...prev.weeklydates,[e.target.value]:e.target.checked}}
  })
}

const handleStatus =(e)=>{
  console.log(e.target.checked)
  setStatus((prev)=>{
    return {...prev,[e.target.value]:e.target.checked}
  })
}


const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("selected",selected)
  console.log("forminputs",forminputs)
  console.log("status",status)
}

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
          <form>
          <ChipsSchedule selected={selected} setSelected={setSelected}  />
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel 
                value="Daily" 
                
                control={<Radio
                  name='schedulebasis'
                  value='Daily'
                  onChange={(e)=>setforminputs((prev)=>{return {...prev,schedulebasis:e.target.value}})}
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
                name='schedulebasis'
                value='Weekly'
                onChange={(e)=>setforminputs((prev)=>{return {...prev,schedulebasis:e.target.value}})}
                sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
              />}
               label="Weekly" />
            </RadioGroup>
            {
              forminputs?.schedulebasis === "Weekly" &&
             <div className='checkbox'>
              {/*<Checkbox control={<Checkbox />} label="Booked" style={{color:"red"}}/> */}
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="mon"
                  onChange={handleDays}
                  sx={{
                    color:  brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                  />}
                label="Mon"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="tue"
                  onChange={handleDays}
                  sx={{
                    color:  brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                  />}
                label="Tue"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="wed"
                  onChange={handleDays}
                  sx={{
                    color: brown[400],
                    '&.Mui-checked': {
                      color: red[600],
                    },
                  }}
                />}
                label="Wed"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="thu"
                  onChange={handleDays}
                   sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
                />}
                label="Thu"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="fri"
                  onChange={handleDays}
                   sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
                />}
                label="Fri"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="sat"
                  onChange={handleDays}
                   sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
                />}
                label="Sat"
                labelPlacement="end"
              />
              <FormControlLabel
                value="end"
                control={<Checkbox 
                  value="sun"
                  onChange={handleDays}
                   sx={{
                  color: brown[400],
                  '&.Mui-checked': {
                    color: red[600],
                  },
                }}
                />}
                label="Sun"
                labelPlacement="end"
              />
            </div>}
            <div className='checkbox'>
              {/*<Checkbox control={<Checkbox />} label="Booked" style={{color:"red"}}/> */}
              <FormControlLabel
                value="end"
                control={<Checkbox
                  value="booked"
                  onChange={handleStatus} 
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
                  value="intransit"
                  onChange={handleStatus} 
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
                  value="closed"
                  onChange={handleStatus} 
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
                  value="arrived"
                  onChange={handleStatus} 
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
        {/* </DialogContent>
        // <DialogActions> */}
          <div className="button_propety d-flex mt-4" >
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
            onClick={close}
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
            onClick={handleSubmit}
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
            {/* <Form /> */}
          </div>
        {/* </DialogActions> */}
        </form>
        </DialogContent>
    </Dialog>
  )
}

export default ScheduleDsrModal