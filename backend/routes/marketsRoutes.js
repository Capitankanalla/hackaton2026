const express = require("express");
const router = express.Router();
const MarketsController = require("../controllers/marketsController");

router.get("/", MarketsController.getMarkets);

module.exports = router;
