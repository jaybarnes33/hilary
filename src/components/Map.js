import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapWithAMarker = withScriptjs(
  withGoogleMap(({ defaultCenter }) => (
    <GoogleMap defaultZoom={8} defaultCenter={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  ))
);

export default MapWithAMarker;
