const { getGoogleMap } = require("../src/utils/puppeteer")

module.exports = async (req, res) => {
  try {
    await getGoogleMap()

    res.json({
      message: "Hello World"
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).end("Something went wrong")
  }
}
