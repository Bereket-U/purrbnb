const express = require("express");
const router = express.Router();
const listingCtrl = require("../../controller/listing")

;

router.post("/new", listingCtrl.create);

router.get("/", listingCtrl.getAll)

module.exports = router;
