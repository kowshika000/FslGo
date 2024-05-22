import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, Stack, Typography } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}
const Navbar = () => {
  const location = useLocation();
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      href="/"
      onClick={handleClick}
      style={{fontSize:'14px', color:'#ACB8C4', fontWeight:'400'}}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/shipments"
      onClick={handleClick}
      style={{fontSize:'14px', color:'#181E25', fontWeight:'400'}}
    >
      Shipments
    </Link>,
  ];
  return (
    <div className="d-flex justify-content-between mx-auto" >
    <Stack >
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
    <Typography style={{fontSize:'14px', color:'#181E25', fontWeight:'500'}}>Need help?</Typography>
    </div>
  );
};

export default Navbar;
