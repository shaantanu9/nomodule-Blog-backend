// This File Handle All the Crud Operation that are neccessary to perform CRUD Opertion

const get = (model) => async (req, res) => {
  try {
    const data = await model.find().lean();
    // get length of the array
    const total = data.length;
    res.send({ total, data });
  } catch (err) {
    console.log(err.message);
  }
};

const getById = (model) => async (req, res) => {
  try {
    const data = await model.findById(req.params.id).lean();
    res.send(data);
  } catch (err) {
    console.log(err.message);
  }
};

const patch = (model) => async (req, res) => {
  const data = await model
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .lean();
  res.send(data);
};

const post = (model) => async (req, res) => {
  try {
    const newdata = await model.create(req.body);
    res.send(newdata);
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
};

const deleteOne = (model) => async (req, res) => {
  const data = await model.findByIdAndDelete(req.params.id).lean();
  res.send(data);
};

const deleteAll = (model) => async (req, res) => {
  const data = await model.deleteMany().lean();
  res.send(data);
};

// Module: Can
module.exports = (model) => ({
  get: get(model),
  getById: getById(model),
  patch: patch(model),
  post: post(model),
  deleteOne: deleteOne(model),
  deleteAll: deleteAll(model),
});
