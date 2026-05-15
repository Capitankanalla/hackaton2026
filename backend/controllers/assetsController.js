const AssetsModel = require("../models/assetsModel");
const { uiToRegion } = require("./marketMap");


module.exports = {
  async getAssetsByMarket(req, res) {
  try {
    const { market } = req.params;

    const region = uiToRegion[market]; // 🔥 AIXÒ ÉS EL FIX

    if (!region) {
      return res.status(400).json({ error: "Mercat invàlid" });
    }

    const assets = await AssetsModel.getAssetsByMarket(region);

    res.json(assets || []);
  } catch (err) {
    console.error("Error getAssetsByMarket:", err);
    res.status(500).json({ error: "Error obtenint actius del mercat" });
  }
},

  async getAssetBySymbol(req, res) {
    try {
      const { symbol } = req.params;
      const asset = await AssetsModel.getBySymbol(symbol);
      res.json(asset);
    } catch (err) {
      console.error("Error getAssetBySymbol:", err);
      res.status(500).json({ error: "Error obtenint actiu" });
    }
  }
};
