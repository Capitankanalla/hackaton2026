const AssetsModel = require("../models/assetsModel");

async function loadMarket(marketName, list) {
  for (const asset of list) {
    await AssetsModel.insertOrUpdateAsset({
      symbol: asset.symbol,
      name: asset.name,
      market: marketName,
      currency: asset.currency,
      type: "stock",
      exchange: asset.exchange,
      region: asset.region || "global"
    });
  }
}

module.exports = loadMarket;
