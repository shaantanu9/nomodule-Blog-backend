const fs = require("fs");
const Nomo = require("../models/nomo.Model");

const createSitemap = async (slug, count) => {
  //   ```<url>
  // <loc>https://shodkk.com/nomodule-python/Python-Error-No-module-named-pynetworktablesimplnetworkconnection</loc>
  // <lastmod>2022-12-13T17:52:11.231Z</lastmod>
  // <changefreq>daily</changefreq>
  // <priority>0.7</priority>
  // </url>
  // ```;
  // const nomos = await Nomo.find({ isPrivate: false }).select("slug").lean();

  //   let count = 0;
  let getTimeInSitemapFormat = new Date().toISOString(); // 2021-12-13T17:52:11.231Z
  //   const nomos = await Nomo.find({}).select("slug").lean();
  const sitemap = `<url><loc>https://shodkk.com/nomodule-python/${slug}</loc><lastmod>${getTimeInSitemapFormat}</lastmod><changefreq>daily</changefreq><priority>0.7</priority></url>`;

  console.log("------------------");
  console.log("------------------");
  console.log(sitemap, "sitemap");
  console.log("------------------");
  console.log("------------------");
  console.log("------------------");
  try {
    fs.appendFileSync(
      `./sitemaps/sitemap-nomodule-${Math.floor(count / 10)}.xml`,
      sitemap
    );
    console.log(count);
  } catch (err) {
    // if (!fs.existsSync("./sitemaps")) {
    //   fs.mkdirSync("./sitemaps");
    // }
    console.log(fs.existsSync("./sitemaps"), "fs.existsSync('./sitemaps')");
    if (
      !fs.existsSync(
        `./sitemaps/sitemap-nomodule-${Math.floor(count / 10)}.xml`
      )
    ) {
      fs.writeFileSync(
        `./sitemaps/sitemap-nomodule-${Math.floor(count / 10)}.xml`,
        `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`
      );
      if (count / 10 !== 0) {
        fs.appendFileSync(
          `./sitemaps/sitemap-nomodule-${Math.floor(count / 10) - 1}.xml`,
          `</urlset>`
        );
      }
    }
  }

  if (count === 3000) {
    console.log("done");
  }
  // console.log(nomos.length, "nomos.length");
};

module.exports = {
  createSitemap,
};

// Read XML file
