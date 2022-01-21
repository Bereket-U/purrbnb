const Listing = require("../models/listing");

module.exports = {
  getAll,
  create,
  deleteOne,
  editOne,
};

async function create(req, res) {
  try {
    await Listing.create({
      ...req.body,
    });

    const listings = await Listing.find();
    console.log(listings); 
    listings.sort((a, b) => b.createdAt - a.createdAt)
    res.status(200).json(listings);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function getAll(req, res) {
  try {
    let listings;
    if (req.query.term) {
      listings = await Listing.find({
        $or: [
          { title: req.query.term },
          { description: req.query.term },
          { type: req.query.term },
          { price: req.query.term },
        ], 
      })
    } else {
      listings = await Listing.find();
    }
   
    listings.sort((a, b) => b.createdAt - a.createdAt)
    res.status(200).json(listings);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
}
async function deleteOne(req, res) {
  try {
    const id = req.params.id;
    await Listing.deleteOne({ _id: req.params.id });

    const listings = await Listing.find();
    res.status(200).json(listings);
  } catch (err) {
    res.status(500).json(err);
  }
}
async function editOne(req, res) {
  try {
    const id = req.params.id;
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    const listings = await Listing.find();
    console.log(listings);
    res.status(200).json(listings);
  } catch (error) {
    res.status(500).json(error);
  }
}
