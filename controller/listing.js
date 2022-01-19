const Listing = require("../models/listing");

module.exports = {
  getAll,
  create,
};

async function create(req, res) {
  try {
    await Listing.create({
      ...req.body,
    });

    const listings = await Listing.find()
    console.log(listings);
    res.status(200).json(listings);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function getAll(req,res) {
  try{
    console.log('getAll');
    const listings = await Listing.find()
    console.log(listings);
    res.status(200).json(listings);
  }catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}