const AssetsModel = require("../models/assetsModel.js");


async function loadEurope() {
  console.log("Carregant EUROPE...");

  for (const asset of europe) {
    await AssetsModel.insertOrUpdateAsset(asset);
    console.log(`✔ ${asset.symbol}`);
  }

  console.log("EUROPE carregat correctament.");
}

loadEurope();
