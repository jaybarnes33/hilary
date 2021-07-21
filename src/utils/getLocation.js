import axios from "axios";

const getLocation = async () => {
  let pos = {};
  const {
    data: { location },
  } = await axios.post(
    `https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyAn4H2plY4TICA-h2M9LcHtx1i_TBAGPq8`
  );

  pos["lat"] = Number(location.lat);
  pos["lng"] = Number(location.lng);

  return pos;
};

export default getLocation;
