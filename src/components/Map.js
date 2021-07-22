import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(({ defaultCenter, locations }) => (
    <GoogleMap defaultZoom={8} defaultCenter={defaultCenter}>
      {Object.values(locations).map(([lat, lng], index) => (
        <Marker key={index} position={{ lat, lng }} />
      ))}
    </GoogleMap>
  ))
);

export default MapWithAMarker;
