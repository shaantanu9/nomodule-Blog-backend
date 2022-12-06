const express = require("express"); // require express
const router = express.Router(); // create express router

// require the controller

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
router.get("/slug/:slug", getNomoBySlug);
router.get("/:id", getNomoById);
router.delete("/:id", deleteNomo);
router.patch("/:id", patchNomo);

module.exports = router;
