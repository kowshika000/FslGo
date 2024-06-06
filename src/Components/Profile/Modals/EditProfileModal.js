import React, { useState } from "react";
import "./EditProfileModal.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import {
  Button,
  Cascader,
  Checkbox,
  Flex,
  Form,
  Input,
  InputNumber,
  Select,
} from "antd";
import { GoLock } from "react-icons/go";
import user from "../../../assets/Name.svg";
import email from "../../../assets/Email.svg";
import office from '../../../assets/Company Name.svg'
import { CaretDownOutlined } from "@ant-design/icons";

const EditProfileModal = ({ open, close }) => {
  //This is Custom InputwithCheck

  const InputWithCheck = ({ label }) => {
    return (
      <>
        <p className="m-0" style={{ fontWeight: "500" }}>
          {label}
        </p>
        <Checkbox
          style={{
            fontWeight: "400",
            letterSpacing: ".01em",
            fontSize: "13px",
          }}
        >
          Get updates here
        </Checkbox>
      </>
    );
  };

  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
    },
  ];

  //This is handleInputs

  const [profileinputs, setProfileinputs] = useState([
    {
      name:"",
      email:"",
      workemail:"",
      phonenumber:"",
      companyname:"",
      companyprofile:"",
      preferredcurrency:""
    }
  ])

  return (
      <Dialog
        open={open}
        onClose={close}
        aria-labelledby="responsive-dialog-title"
        id="edit_profile_modal_section"
      >
        <DialogTitle
          id="responsive-dialog-title"
          style={{ marginBottom: "20px" }}
        >
          <Typography
            sx={{
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "19px",
              letterSpacing: ".01em",
            }}
          >
            Edit Profile Info
          </Typography>
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText> */}
          <Form layout="vertical" autoComplete="off" style={{ width: "500px" }}>
            <Form.Item
              hasFeedback
              label="Name"
              name="Name"
              validateTrigger="onBlur"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={user}></img>}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            <Form.Item
              hasFeedback
              label={<InputWithCheck label={"Email"} />}
              name="Email"
              validateTrigger="onBlur"
              className="inputwithcheck"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={email}></img>}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            <Form.Item
              hasFeedback
              label={<InputWithCheck label={"Alternate Email"} />}
              name="AlternateEmail"
              validateTrigger="onBlur"
              className="inputwithcheck"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={email}></img>}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Phone Number"
              name="Phone Number"
              validateTrigger="onBlur"
            >
              <Input
                size="large"
                style={{ width: "100%", marginBottom: "8px" }}
                addonBefore={
                  // <Cascader
                  //   dropdownMenuColumnStyle={{ zIndex: "999"}}
                  //   options={options}
                  //   placeholder="+91"
                  //   style={{ width: "80px"}}
                  // />
                  <Select
                    defaultValue="+91"
                    // onChange={handleChange}
                    size="large"
                    dropdownStyle={{ zIndex: "99999" }}
                    suffixIcon={
                      <CaretDownOutlined
                        style={{ fontSize: "16px", color: "#000" }}
                      />
                    }
                    options={[
                      {
                        value: "India",
                        label: "+91",
                      },
                      {
                        value: "Canada",
                        label: "+87",
                      },
                      {
                        value: "England",
                        label: "+63",
                      },
                    ]}
                  />
                }
                defaultValue={100}
              />
              <Checkbox
                style={{
                  fontWeight: "400",
                  letterSpacing: ".01em",
                  fontSize: "13px",
                }}
              >
                This is my Whatsapp Number
              </Checkbox>
              {/* <Input size="large" placeholder="Type here..." prefix={<GoLock />} /> */}
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            <Form.Item
              hasFeedback
              label="Company Name"
              name="Preferred Currency"
              validateTrigger="onBlur"
            >
              <Input
                size="large"
                placeholder="Type here..."
                prefix={<img src={office}></img>}
              />
              {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
            </Form.Item>
            <Flex horizontal justify="space-between">
              <Form.Item
                hasFeedback
                label="Company Profile"
                name="CompanyProfile"
                validateTrigger="onBlur"
              >
                {/* <Input size="large" placeholder="Type here..." prefix={<img src={user}></img>} /> */}
                <Select
                  defaultValue="lucy"
                  // onChange={handleChange}
                  size="large"
                  dropdownStyle={{ zIndex: "99999" }}
                  id="dropStyle1"
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "16px", color: "#000" }}
                    />
                  }
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
                {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
              </Form.Item>
              <Form.Item
                hasFeedback
                label="Preferred Currency"
                name="CompanyName"
                validateTrigger="onBlur"
                id="dropStyle2"
              >
                <Select
                  defaultValue="lucy"
                  // onChange={handleChange}
                  size="large"
                  dropdownStyle={{ zIndex: "99999" }}
                  suffixIcon={
                    <CaretDownOutlined
                      style={{ fontSize: "16px", color: "#000" }}
                    />
                  }
                  options={[
                    {
                      value: "jack",
                      label: "Jack",
                    },
                    {
                      value: "lucy",
                      label: "Lucy",
                    },
                    {
                      value: "Yiminghe",
                      label: "yiminghe",
                    },
                    {
                      value: "disabled",
                      label: "Disabled",
                      disabled: true,
                    },
                  ]}
                />
                {/* disabled={isReadOnly} defaultValue={apiData?.name} value={shipperinputs.name} onChange={handleChange} */}
              </Form.Item>
            </Flex>
          </Form>
        </DialogContent>
        <DialogActions style={{ padding: "20px 24px" }}>
          <Button size="large" autoFocus onClick={close}>
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#D32D2F",
              color: "white",
              marginLeft: "20px",
            }}
            size="large"
            onClick={close}
            autoFocus
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
  );
};

export default EditProfileModal;
