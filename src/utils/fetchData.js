import axios from "axios";

const fetchData = async () => {
  const { data } = await axios.get("https://mazitekgh.com/covid19/v1/");

  return data;
};

export default fetchData;
