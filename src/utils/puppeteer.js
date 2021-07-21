import puppeteer from "puppeteer"

export const getGoogleMap = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://maps.google.com", { waitUntil: "networkidle2" })
  await page.screenshot({ path: "../images/google-map.png" })

  const { pathname } = window.location
  console.log(pathname)

  await browser.close()
}
