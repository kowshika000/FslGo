import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link, Popover, Stack, Typography } from "@mui/material";
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';

function handleClick(event) {
  event.preventDefault();
  // console.info('You clicked a breadcrumb.');
}
const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const homeBreadcrumb = (
    <Link
      underline="hover"
      key="1"
      href="/"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#ACB8C4", fontWeight: "400" }}
    >
      Home
    </Link>
  );
  const shipmentsBreadcrumb = (
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/shipments"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Shipments
    </Link>
  );
  const quotationsBreadcrumb = (
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/quotation"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Quotations
    </Link>
  );

  const quotationsResultBreadcrumb = (
    <Link
      underline="hover"
      key="3"
      color="inherit"
      href="/quotation"
      onClick={handleClick}
      style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
    >
      Quotations Result
    </Link>
  );
  const invoiceBreadcrumb = (
    <Link
    underline="hover"
    key="3"
    color="inherit"
    href="/invoice"
    onClick={handleClick}
    style={{ fontSize: "14px", color: "#181E25", fontWeight: "400" }}
  >
    Invoice
  </Link>
  );
  const breadcrumbs = [homeBreadcrumb];

  if (pathname === "/shipments") {
    breadcrumbs.push(shipmentsBreadcrumb);
  } else if (pathname === "/quotation") {
    breadcrumbs.push(quotationsBreadcrumb);
  } else if (pathname === "/findnewrate") {
    breadcrumbs.push(quotationsResultBreadcrumb);
  } else if (pathname === "/invoice") {
    breadcrumbs.push(invoiceBreadcrumb);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMdl = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className="d-flex justify-content-between mx-auto">
      <Stack>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
      <div>
        <Typography
          style={{ fontSize: "14px", color: "#181E25", fontWeight: "500",cursor:"pointer" }}
          onClick={handleClickMdl}
          aria-describedby={id}
        >
          Need help?
        </Typography>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            // horizontal: "left",
          }}
          sx={{top:"15px",right:"50px",left:"0px",width:"220px"}}
        >
          <Typography sx={{ p: 1,fontSize:"14px" }}> <ForumIcon sx={{fontSize:"20px",marginRight:"10px"}}/> Start Chat</Typography>
          <Typography sx={{ p: 1,fontSize:"14px" }}> <CallIcon sx={{fontSize:"20px",marginRight:"10px"}}/> Request Callback</Typography>
          <Typography sx={{ p: 1 ,fontSize:"14px"}}> <MailIcon sx={{fontSize:"20px",marginRight:"10px"}}/> Email US</Typography>
        </Popover>
      </div>
    </div>
  );
};

export default Navbar;
