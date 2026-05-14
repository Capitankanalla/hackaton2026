const express = require("express");
const router = express.Router();
const AssetsController = require("../controllers/assetsController");

router.get("/:market", AssetsController.getAssetsByMarket);
router.get("/symbol/:symbol", AssetsController.getAssetBySymbol);

module.exports = router;
