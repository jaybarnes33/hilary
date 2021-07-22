const { locations } = require("../src/utils/locations");

module.exports = async (req, res) => {
  try {
    const location = await locations();
    console.log(locations);
    res.json(location);
  } catch (error) {
    console.log(error.message);
    res.status(500).end("Something went wrong");
  }
};
