// Get Array of slugs and send request to each slug

const axios = require("axios");
const fs = require("fs");
const { createSitemap } = require("./createSitemap");
const sendRequest = async (slug) => {
  const url = "https://www.shodkk.com/nomodule-python/" + slug;
  try {
    const response = await axios.get(url);
    // console.log(response.data);
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleSlug = async (SlugArray) => {
  for (let i = 0; i < 100; i++) {
    //   for (let i = 0; i < SlugArray.length; i++) {
    await sendRequest(SlugArray[i].slug);
    // await createSitemap(SlugArray[i].slug, i);
  }
};

module.exports = {
  getSingleSlug,
};

//
const downloadXml = async () => {
  url = "https://www.shodkk.com/sitemap-0.xml";
  const response = await axios.get(url);
  console.log(response.data);
  fs.writeFileSync("./sitemap-0Whole.xml", response.data);
};
// downloadXml();
//
