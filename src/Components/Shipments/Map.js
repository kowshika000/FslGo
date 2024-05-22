import React, { useState } from "react";
import { MapContainer, Marker, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import MapMarker from "./ShipmentTable/MapMarker";

// Define the position and coordinates
const position = [10.586958, -34.623453];

const arrCoordinates1 = [
  [40.715051, -73.586857], // New York
  [41.986704, -87.799812], // Chicago
];

// Create custom icons
const icon1 = L.icon({
  iconSize: [20, 20],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://image-data.in2.cdn-alpha.com/marker1.svg",
});

// Define the component
export default function Americas() {
  const [showModal, setShowModal] = useState(false);

  const handleMarkerClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div>
      <MapContainer
        center={position}
        zoom={1.5}
        minZoom={1.5}
        style={{ height: "300px",position:"relative" }}
      >
        <TileLayer url="https://tile.openstreetmap.de/{z}/{x}/{y}.png" />
        {/* Markers with icon 1 */}
        {arrCoordinates1.map((coordinate, index) => (
          <Marker
            key={index}
            position={coordinate}
            icon={icon1}
            eventHandlers={{
              click: () => handleMarkerClick(),
            }}
          >
            {/* <Tooltip direction="top" offset={[0, -30]}>
              <div>
                <strong>New York</strong>
                <br />
                Freight Systems Inc., 626 RXR Plaza Uniondale, NY 11556
              </div>
            </Tooltip> */}
          </Marker>
        ))}
      </MapContainer>
      <MapMarker showModal={showModal} onClose={handleModalClose} />
    </div>
  );
}
