const express = require("express");
const router = express.Router();

router.use("/markets", require("./marketsRoutes"));
router.use("/assets", require("./assetsRoutes"));
router.use("/prices", require("./pricesRoutes"));
router.use("/chat", require("./chatRoutes"));

module.exports = router;
