import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const Mapping = () => {
  return (
    <div className="w-full h-96 mt-16">
     
      {/* Adjust height as needed */}
      <MapContainer
        center={[41.3111, 69.2797]}
        zoom={12}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[41.3111, 69.2797]}>
          <Popup>
            Tashkent, Uzbekistan <br /> Capital city
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
