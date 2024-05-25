import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress
} from "@mui/material";
import LeftLine from "../../../assets/leftLine.png";
import RightLine from "../../../assets/rightLine.png";
import { useDispatch, useSelector } from "react-redux";
import { sailingRequest } from "../../../Redux/Actions/SailingAction";
import CountryFlag from "../../Core-Components/CountryFlag";
import { Port } from "./Port";
import { opensailingRequest } from "../../../Redux/Actions/OpneSailingAction";

const UpcomingSailings = () => {
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [displayedSchedules, setDisplayedSchedules] = useState(4);
  const [displaySailingData, setDisplaySailingData] = useState(4);
  const volume = [{ name: "LCL" }, { name: "FCL" }, { name: "Air" }];
  const [orgPortCode, setOrgPortCode] = useState("");
  const [desPortCode, setDesPortCode] = useState("");
  const dispatch = useDispatch();
  const UpcomingData = useSelector((state) => state.Sailing);
  const {loading,error} = useSelector((state) => state.Sailing);
  console.log(UpcomingData);
  useEffect(() => {
    dispatch(sailingRequest());
  }, []);

  useEffect(() => {
    if (orgPortCode && desPortCode) {
      console.log(
        "API call with origin and destination ports:",
        orgPortCode,
        desPortCode
      );

      const orign = orgPortCode;
      const destination = desPortCode;

      dispatch(opensailingRequest({ orign, destination }));
    }
  }, [orgPortCode, desPortCode, dispatch]);

  const sailing_success = useSelector((state) => state.OpenSailing);
  const sailingData = sailing_success?.openSailing?.data;
  console.log("sailing data ", sailingData);
  const schedules = UpcomingData?.sailingData?.schedules;

  const handleShowMore = () => {
    if (displayedSchedules === 4 && displaySailingData === 4) {
      setDisplayedSchedules(schedules.length);
      setDisplaySailingData(sailingData.length);
    } else {
      setDisplayedSchedules(4);
      setDisplaySailingData(4);
    }
  };

  return (
    <div
      className="w-100 mt-5 shadow mx-auto"
      style={{
        minWidth: "1269px",
        borderRadius: "8px",
      }}
    >
      <Port />

      {sailingData ? (
        <>
         {loading ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
            }}
          >
            <CircularProgress style={{color:"red"}}/>
          </Box>
        ) : (
          <>
          {sailingData
            .slice(0, displaySailingData)
            .map((sailingData, index) => (
              <div key={index}>
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "none",
                    borderBottom: "1px solid #F3F5F7",
                  }}
                  className="mx-2 acc-row"
                >
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ border: "none" }}
                  >
                    <div className="d-flex w-100">
                      <div style={{ width: "15%" }}>
                        <Typography
                          className="fw-bold"
                          sx={{ fontSize: "15px", lineHeight: "22px" }}
                        >
                          {sailingData?.origin_date}{" "}
                        </Typography>
                        <div className="d-flex ">
                          <CountryFlag
                            countryCode={sailingData?.origin_country_code}
                            alt="ind"
                            width={20}
                            className="me-1"
                          />
                          <Typography
                            sx={{
                              opacity: "0.7",
                              fontSize: "13px",
                              color: "#495A6E",
                            }}
                          >
                            {sailingData?.origin}
                          </Typography>
                        </div>
                      </div>
                      <div style={{ width: "60%" }}>
                        <div className="d-flex justify-content-around">
                          <div className=" d-flex flex-direction-row">
                            <div>
                              <img src={LeftLine} width="257px" height="10px" />
                            </div>
                          </div>
                          <div className=" text-start my-1 px-2">
                            <Typography
                              sx={{ opacity: "0.7", fontSize: "14px" }}
                              className="fw-bold "
                            >
                              T/T : {sailingData?.transit_days} days
                            </Typography>
                          </div>
                          <div>
                            <img src={RightLine} width="257px" height="10px" />
                          </div>
                        </div>
                      </div>
                      <div className=" " style={{ width: "15%" }}>
                        <Typography
                          className="fw-bold"
                          sx={{ fontSize: "15px", lineHeight: "22px" }}
                        >
                          {sailingData?.destination_date}
                        </Typography>
                        <div className="d-flex">
                          <CountryFlag
                            countryCode={sailingData?.dest_country_code}
                            alt="ind"
                            width={20}
                            className="me-2"
                          />{" "}
                          <Typography
                            sx={{
                              opacity: "0.7",
                              fontSize: "13px",
                              color: "rgba(73, 90, 110, 1)",
                            }}
                          >
                            {sailingData?.destination}
                          </Typography>
                        </div>
                      </div>
                      <button
                        className="book-now justify-content-end align-content-center ms-2 me-0"
                        style={{
                          backgroundColor: "#F01E1E",
                          padding: "0 8px",
                          borderRadius: "6px",
                          color: "white",
                          border: "none",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails sx={{ display: "flex" }}>
                    <div
                      className="card w-50 m-2 border-2 border-opacity-50"
                      style={{ background: "#F8FAFC" }}
                    >
                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          VESSEL
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {sailingData?.vessel}
                        </Typography>
                      </div>

                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          VOYAGE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {sailingData?.voyage}
                        </Typography>
                      </div>
                      <div className="d-flex justify-content-between p-2 ">
                        <Typography sx={{ fontSize: "13px" }}>
                          TRANSIT TIME
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {sailingData?.transit_ptp}
                        </Typography>
                      </div>
                    </div>
                    <div
                      className="card w-50 m-2 border-2 border-opacity-50"
                      style={{ background: "#F8FAFC" }}
                    >
                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          CUT OFF DATE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {sailingData?.cut_off_date}
                        </Typography>
                      </div>
                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          DEPARTURE DATE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {sailingData?.origin_date}
                        </Typography>
                      </div>
                      <div className="d-flex justify-content-between p-2 ">
                        <Typography sx={{ fontSize: "13px" }}>
                          ARRIVAL DATE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {sailingData?.destination_date}
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            </>
          )}
        </>
      ) : (
        <>
         {loading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "200px",
                }}
              >
                <CircularProgress style={{color:"red"}}/>
              </Box>
            ) : (
              <>
             {schedules && schedules.slice(0, displayedSchedules).map((schedule, index) => (
              <div key={index}>
                <Accordion
                  sx={{
                    padding: "20px",
                    border: "none",
                    borderBottom: "1px solid #F3F5F7",
                  }}
                  className="mx-2 acc-row"
                >
                  <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{ border: "none" }}
                  >
                    <div className="d-flex w-100">
                      <div style={{ width: "15%" }}>
                        <Typography
                          className="fw-bold"
                          sx={{ fontSize: "15px", lineHeight: "22px" }}
                        >
                          {schedule?.ETD}{" "}
                        </Typography>
                        <div className="d-flex ">
                          <CountryFlag
                            countryCode={schedule?.origin_country_code}
                            alt="ind"
                            width={20}
                            className="me-1"
                          />
                          <Typography
                            sx={{
                              opacity: "0.7",
                              fontSize: "13px",
                              color: "#495A6E",
                            }}
                          >
                            {schedule?.origin_name}
                          </Typography>
                        </div>
                      </div>
                      <div style={{ width: "60%" }}>
                        <div className="d-flex justify-content-around">
                          <div className=" d-flex flex-direction-row">
                            <div>
                              <img src={LeftLine} width="257px" height="10px" />
                            </div>
                          </div>
                          <div className=" text-start my-1 px-2">
                            <Typography
                              sx={{ opacity: "0.7", fontSize: "14px" }}
                              className="fw-bold "
                            >
                              T/T : {schedule?.ttlrd} days
                            </Typography>
                          </div>
                          <div>
                            <img src={RightLine} width="257px" height="10px" />
                          </div>
                        </div>
                      </div>
                      <div className=" " style={{ width: "15%" }}>
                        <Typography
                          className="fw-bold"
                          sx={{ fontSize: "15px", lineHeight: "22px" }}
                        >
                          {schedule?.ETA}
                        </Typography>
                        <div className="d-flex">
                          <CountryFlag
                            countryCode={schedule?.dest_country_code}
                            alt="ind"
                            width={20}
                            className="me-2"
                          />{" "}
                          <Typography
                            sx={{
                              opacity: "0.7",
                              fontSize: "13px",
                              color: "rgba(73, 90, 110, 1)",
                            }}
                          >
                            {schedule?.fdc_name}
                          </Typography>
                        </div>
                      </div>
                      <button
                        className="book-now justify-content-end align-content-center ms-2 me-0"
                        style={{
                          backgroundColor: "#F01E1E",
                          padding: "0 8px",
                          borderRadius: "6px",
                          color: "white",
                          border: "none",
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails sx={{ display: "flex" }}>
                    <div
                      className="card w-50 m-2 border-2 border-opacity-50"
                      style={{ background: "#F8FAFC" }}
                    >
                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          VESSEL
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {schedule?.vessel_name}
                        </Typography>
                      </div>

                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          VOYAGE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {schedule?.voyage_no}
                        </Typography>
                      </div>
                      <div className="d-flex justify-content-between p-2 ">
                        <Typography sx={{ fontSize: "13px" }}>
                          TRANSIT TIME
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {schedule?.ttport}
                        </Typography>
                      </div>
                    </div>
                    <div
                      className="card w-50 m-2 border-2 border-opacity-50"
                      style={{ background: "#F8FAFC" }}
                    >
                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          CUT OFF DATE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {schedule?.cutoff_date}
                        </Typography>
                      </div>
                      <div className="d-flex justify-content-between p-2 border-bottom border-2">
                        <Typography sx={{ fontSize: "13px" }}>
                          DEPARTURE DATE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {schedule?.ETD}
                        </Typography>
                      </div>
                      <div className="d-flex justify-content-between p-2 ">
                        <Typography sx={{ fontSize: "13px" }}>
                          ARRIVAL DATE
                        </Typography>
                        <Typography
                          className="fw-bolder"
                          sx={{ fontSize: "13px" }}
                        >
                          {schedule?.ETA}
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            ))}
            </>
          )}
        </>
      )}
      <div
        className="card-footer p-3"
        style={{
          fontSize: "14px",
          fontWeight: "400",
          backgroundColor: "#F8FAFC",
        }}
        role="button"
        onClick={handleShowMore}
      >
        {sailingData
          ? displaySailingData === 4
            ? "Show More"
            : "Show Less"
          : displayedSchedules === 4
          ? "Show More"
          : "Show Less"}
      </div>
    </div>
  );
};

export default UpcomingSailings;
