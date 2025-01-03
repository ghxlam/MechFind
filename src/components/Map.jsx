import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Map() {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY 
    });
  
    if (!isLoaded) return <div>Loading...</div>;
  
    return (
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "700px" }}
        center={{ lat: 40.7128, lng: -74.0060 }}
        zoom={11}
      >
        <Marker position={{ lat: 40.7128, lng: -74.0060 }} />
      </GoogleMap>
    );
  }

export default Map;