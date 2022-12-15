// Get Array of slugs and send request to each slug

const axios = require("axios");
const fs = require("fs");
const { createSitemap } = require("./createSitemap");
const sendRequest = async (slug) => {
  const url = "https://www.shodkk.com/nomodule-python/" + slug;
  try {
    const response = await axios.get(url);
    // console.log(response.data);
    console.log("url: ", url);
  } catch (err) {
    console.log(err.message);
  }
};

const getSingleSlug = async (SlugArray, randomLoop) => {
  for (let i = 0; i < randomLoop; i++) {
    //   for (let i = 0; i < SlugArray.length; i++) {
    let randomNum = Math.floor(Math.random() * SlugArray.length); // 0 - 3000
    await sendRequest(SlugArray[randomNum].slug);
    console.log(
      "count: ",
      i,
      "randomNum: ",
      randomNum,
      "randomLoop: ",
      randomLoop
    );
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
