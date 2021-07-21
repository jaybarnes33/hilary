const { getGoogleMap } = require("../src/utils/puppeteer");

module.exports = async (req, res) => {
  try {
    const location = await getGoogleMap();
    res.json(location);
  } catch (error) {
    console.log(error.message);
    res.status(500).end("Something went wrong");
  }
};
