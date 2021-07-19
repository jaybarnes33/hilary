import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import MapWithAMarker from "../components/Map";
import GMap from "../components/Map";
import getLocation from "../utils/getLocation";
const Map = () => {
  const [location, setLocation] = useState({});
  useEffect(() => {
    setLocation(getLocation());
  }, []);
  return (
    <div>
      <Header title="Test Centers around" variant="danger" />
      <div className="mt-5">
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAn4H2plY4TICA-h2M9LcHtx1i_TBAGPq8&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultCenter={location}
        />
      </div>
    </div>
  );
};

export default Map;
