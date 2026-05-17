const AssetsModel = require("../models/assetsModel.js");
async function loadIbex() {
  console.log("Carregant IBEX35...");

  for (const asset of ibex35) {
    await AssetsModel.insertOrUpdateAsset({
      symbol: asset.symbol,
      name: asset.name,
      market: "IBEX35",
      currency: asset.currency,
      type: "stock",
      exchange: asset.exchange,
      region: "EU"
    });

    console.log(`✔ Inserit/actualitzat: ${asset.symbol}`);
  }

  console.log("IBEX35 carregat correctament.");
}

loadIbex();
