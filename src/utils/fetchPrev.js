const fetchPrev = () => {
  return JSON.parse(sessionStorage.getItem("covid"));
};

export default fetchPrev;
