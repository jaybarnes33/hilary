const getLocation = () => {
  let pos = {};
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      pos["lat"] = Number(position.coords.latitude);
      pos["lng"] = Number(position.coords.longitude);
    });
    return pos;
  } else {
    return "Something went wrong";
  }
};

export default getLocation;
