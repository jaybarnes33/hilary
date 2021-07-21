import puppeteer from "puppeteer";

export const getGoogleMap = async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://maps.google.com", { waitUntil: "networkidle2" });

  const pageURL = page.url();

  const coords = pageURL.split("@")[1];
  const [lat, lng] = coords.split(",");

  const location = {
    lat,
    lng,
  };

  return location;
};
