const express = require("express");
const router = express.Router();
const marketsController = require("../controllers/marketsController");

router.get("/:market", marketsController.getMarketAssets);
// router.get("/", MarketsController.getMarkets);

module.exports = router;
