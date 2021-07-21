import puppeteer from "puppeteer"

export const getGoogleMap = async () => {
  const browser = await puppeteer.launch({
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    headless: false
  })
  const page = await browser.newPage()
  await page.goto("https://maps.google.com", { waitUntil: "networkidle2" })
  await page.screenshot({ path: "../images/google-map.png" })

  const { pathname } = window.location
  console.log(pathname)

  await browser.close()
}
