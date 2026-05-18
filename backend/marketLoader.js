const AssetsModel = require("./models/assetsModel");
const markets = require("./api/markets");

async function loadMarket(marketName) {
  const list = markets[marketName.toLowerCase()];
  if (!list) throw new Error(`Mercat desconegut: ${marketName}`);

  for (const asset of list) {
    await AssetsModel.insertOrUpdateAsset({
      symbol: asset.symbol,
      name: asset.name,
      market: marketName.toUpperCase(),
      currency: asset.currency,
      type: "stock",
      exchange: asset.exchange,
      region: (asset.region || "GLOBAL").toUpperCase()
    });
  }
}

module.exports = loadMarket;
