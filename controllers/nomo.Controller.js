const crud = require("./crud.Controller");
const Nomo = require("../models/nomo.Model");

const { get, getById, patch, post, deleteOne } = crud(Nomo);

const getNomo = async (req, res) => get(req, res);

const getNomolimit = async (req, res) => {
  console.log(req.query, "req.query");
  const limit = req.query.limit || 10;
  const skip = req.query.skip || 0;
  const page = req.query.page || 1;
  // get total number of nomos length
  const totalnomos = await Nomo.find({
    isPrivate: false,
  }).countDocuments();
  // total page remaining
  const totalPages = Math.ceil(totalnomos / limit);
  // get all nomos
  const nomos = await Nomo.find({ isPrivate: false })
    .lean()
    .limit(limit) // limit the number of nomos to be returned
    .skip((page - 1) * limit) // skip the number of nomos to be returned
    .sort({ createdAt: -1 }) // sort the nomos by date created
    // .select("-commentsList, -likesList"); // select all the fields except the commentsList
    .select("-commentsList"); // select all the fields except the commentsList
  // .select("-likesList"); // select all the fields except the likesList
  console.log(nomos.length, "nomos.length", totalnomos);
  res.send({ totalPages, nomos });
};

const getNomoById = async (req, res) => getById(req, res);

const getNomoBySlug = async (req, res) => {
  try {
    const data = await Nomo.findOne({ slug: req.params.slug }).lean();
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
};

const searchNomo = async (req, res) => {
  console.log(req.query, "req.query");
  try {
    // slug or title or detail or topics or errorTitle or about or code match some part of the search string query
    const data = await Nomo.find({
      $or: [
        { slug: { $regex: req.query.q, $options: "i" } },
        { title: { $regex: req.query.q, $options: "i" } },
        { detail: { $regex: req.query.q, $options: "i" } },
        { topics: { $regex: req.query.q, $options: "i" } },
        { errorTitle: { $regex: req.query.q, $options: "i" } },
        { about: { $regex: req.query.q, $options: "i" } },
        { code: { $regex: req.query.q, $options: "i" } },
      ],
    })
      .select("-markdown")
      .select("-code")
      .select("-file_link")
      .select("-maintainername")
      .select("-pypi_link")
      .select("-link")
      .select("-watching")
      .select("-github")
      .select("-issues")
      .select("-licence")
      .select("-package_details")
      .select("-email")
      .select("-author")
      .select("-time")
      .select("-homepage")
      .select("-stars")
      .select("-topics")
      .select("-fork")
      .select("-code1")
      .select("-detail")
      .select("-contributors")
      .select("-maintainerlink")
      .lean();
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
};

const patchNomo = async (req, res) => patch(req, res);

const postNomo = async (req, res) => post(req, res);

const deleteNomo = async (req, res) => deleteOne(req, res);

module.exports = {
  getNomo,
  getNomoById,
  patchNomo,
  postNomo,
  deleteNomo,
  getNomoBySlug,
  getNomolimit,
  searchNomo,
};
