const express = require("express");
const router = express.Router();
const PricesController = require("../controllers/pricesController");

router.get("/:symbol", PricesController.getPriceHistory);
router.get("/latest/:symbol", PricesController.getLatestPrice);

module.exports = router;
