import React, { useState, useRef } from "react";
import { Typography, Box, TextField } from "@mui/material";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Modal from "@mui/material/Modal";
import '../ShipmentCard.css';
import {ReactComponent as Location} from '../../../assets/location.svg'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Destination = () => {
  const [destination, setDestination] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const destinationRef = useRef(null);

  // Mock suggestions data
  const suggestions = [
    {
      label: "Sea Port",
      labelText: "Pick up not included",
      items: ["Nhava Sheva (INNSA)"],
    },
    {
      label: "Airport",
      labelText: "Pick up not included",
      items: ["Chhatrapati Shivaji International Airport (BOM)"],
    },
    {
      label: "City",
      labelText: "Pick up not included",
      items: ["Chhatrapati Shivaji International Airport (BOM)"],
    },
  ];

  const handleDestinationChange = (event) => {
    const { value } = event.target;
    setDestination(value);
  };

  const handleDestinationFocus = () => {
      setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const handleSuggestionClick = (value) => {
    setDestination(value);
    setModalOpen(false);
  };

  return (
    <>
      <div className="column  " style={{ display: "flex", minWidth:'25.92%' }}>
        <div style={{alignContent:'center'}}>
      <Location style={{ width:"20px", height:'20px'}} className="mx-2"/>
      </div>
        <div className="w-100">
          <Typography className="fw-bold"  style={{fontSize:'14px', fontWeight:'700', lineHeight:'20px'}}>Destination</Typography>
          <input
            type="text"
            style={{ border: "none", outline: "none", width: "90%", background: 'transparent' }}
            className="input-field "
            placeholder="Enter Sea/Airport, City or Zip Code"
            ref={destinationRef}
            onChange={handleDestinationChange}
            onClick={handleDestinationFocus}
            value={destination}
          />
        </div>
        
      </div>

      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {suggestions.map((group, index) => (
            <div key={index}>
              <Typography variant="subtitle1" sx={{ fontWeight: "600", mt: 2 }}>
                {group.label} ({group.labelText})
              </Typography>
              {group.items.map((item, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{ ml: 2, mt: 1, cursor: "pointer"}}
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </Typography>
              ))}
            </div>
          ))}
        </Box>
      </Modal>
    </>
  );
};

export default Destination;
