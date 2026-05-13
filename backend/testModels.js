const Assets = require("./models/AssetsModel.js");
const AssetPrices = require("./models/assetPrices.js");

(async () => {
  const assets = await Assets.getAll();
  console.log("Assets:", assets);

  if (assets.length) {
    const first = assets[0];
    const latest = await AssetPrices.getLatestByAssetId(first.id);
    console.log("Latest price for", first.symbol, ":", latest);
  }

  process.exit(0);
})();