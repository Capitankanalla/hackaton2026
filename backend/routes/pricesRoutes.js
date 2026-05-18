const express = require("express");
const router = express.Router();
const PricesController = require("../controllers/pricesController");

router.get("/latest/:symbol", PricesController.getLatestPrice);
router.get("/:symbol", PricesController.getPriceHistory);


module.exports = router;
