const { getGoogleMap } = require("../utils/puppeteer")

module.exports = async (req, res) => {
  await getGoogleMap()

  res.json({
    body: req.body,
    query: req.query,
    cookies: req.cookies
  })
}
