const express = require("express");
const router = express.Router();

router.use("/markets", require("./marketsRoutes"));
router.use("/assets", require("./assetsRoutes"));
router.use("/prices", require("./pricesRoutes"));

module.exports = router;
