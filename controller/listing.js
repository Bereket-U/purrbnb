const Listing = require("../models/listing");

module.exports = {
  create,
};

async function create(req, res) {
  try {
    await Listing.create({
      ...req.body,
    });

    res.status(200).json("ok");
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
