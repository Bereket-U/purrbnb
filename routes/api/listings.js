const express = require("express");
const router = express.Router();
const listingCtrl = require("../../controller/listing");

router.post("/new", listingCtrl.create);

router.get("/", listingCtrl.getAll);

router.delete("/:id", listingCtrl.deleteOne);

router.put("/:id", listingCtrl.editOne);

module.exports = router;
