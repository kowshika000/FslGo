import React, { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapMarker from "./MapMarker";
import { useDispatch, useSelector } from "react-redux";
import { mapRequest } from "../../../Redux/Actions/MapAction";
import { CountryData } from "./CountryData";

// Define the position and coordinates
const position = [10.586958, -34.623453];

const icon1 = L.icon({
  iconSize: [20, 20],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://image-data.in2.cdn-alpha.com/marker1.svg",
});

// Define the component
export default function Americas() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const handleMarkerClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  useEffect(() => {
    dispatch(mapRequest());
  }, [dispatch]);

  const MapDatas = useSelector((state) => state.Map?.MapData?.countries);
  console.log("map....", MapDatas);

  const filteredCountryData = MapDatas
    ? CountryData.filter((country) =>
        MapDatas.some((data) => data.country_code === country.countryCode)
      )
    : [];

  // const filteredCountryData = MapDatas
  // ? MapDatas.filter((data) =>
  //     CountryData.some((country) => country.countryCode === data.country_code)
  //   )
  // : [];
 console.log("filter",filteredCountryData);
  const markernumber = MapDatas?.map((data) => data.no_of_shipments);

  return (
    <div>
      <MapContainer
        center={position}
        zoom={1.5}
        minZoom={1.5}
        style={{ height: "300px", position: "relative" }}
      >
        <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
        {/* Markers with icon 1 */}
        {filteredCountryData.map((location, index) => {
          return (
            <Marker
              key={index}
              position={[location.latitude, location.longitude]}
              icon={icon1}
              eventHandlers={{
                click: () => handleMarkerClick(),
              }}
            >
              {/* {MapDatas.map((data,index) => (
                <Tooltip direction="top" offset={[0, -30]} key={index}>
                  {data.no_of_shipments}
                  {console.log("no",data.no_of_shipments)}
                </Tooltip>
              ))} */}
            </Marker>
          );
        })}
      </MapContainer>
      <MapMarker showModal={showModal} onClose={handleModalClose} />
    </div>
  );
}
