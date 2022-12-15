const express = require("express"); // require express
const router = express.Router(); // create express router
const Nomo = require("../models/nomo.Model");
// require the controller
const { getSingleSlug } = require("../utils/sendRequest2EachSlug.js");
const {
  getNomo,
  getNomoById,
  patchNomo,
  postNomo,
  deleteNomo,
  getNomoBySlug,
  getNomolimit,
  searchNomo,
} = require("../controllers/nomo.Controller.js");

// connect to the main route

// router.get("/", getNomo);
router.get("/", getNomolimit);
router.post("/", postNomo);
router.get("/s", searchNomo);
router.get("/slugs", async (req, res) => {
  const data = await Nomo.find({}).select("slug").lean();
  let randomLoop = Math.random() * 100;
  getSingleSlug(data, randomLoop);
  res.send({ data: data[0], randomLoop });
});

router.get("/slug/:slug", getNomoBySlug);
router.get("/:id", getNomoById);
router.delete("/:id", deleteNomo);
router.patch("/:id", patchNomo);

module.exports = router;
