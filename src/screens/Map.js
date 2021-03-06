import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import MapWithAMarker from "../components/Map";
import getLocation from "../utils/getLocation";
import locations from "../data/locations";
const Map = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const watchID = navigator.geolocation.watchPosition(
      ({ coords }) =>
        setLocation({ lat: coords.latitude, lng: coords.longitude }),
      undefined,
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 5000 }
    );

    return () => navigator.geolocation.clearWatch(watchID);
  }, []);

  return (
    <div>
      <Header title="Test Centers around" variant="danger" />
      <div className="mt-5">
        {
          <MapWithAMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAn4H2plY4TICA-h2M9LcHtx1i_TBAGPq8&v=3.exp&libraries=geometry,drawing,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            defaultCenter={location}
            locations={locations}
          />
        }
      </div>
    </div>
  );
};

export default Map;
