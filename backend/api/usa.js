const AssetsModel = require("../models/assetsModel.js");


async function loadUsa() {
  console.log("Carregant USA (NASDAQ + S&P500 + DOW JONES)...");

  for (const asset of usa) {
    await AssetsModel.insertOrUpdateAsset(asset);
    console.log(`✔ ${asset.symbol}`);
  }

  console.log("USA carregat correctament.");
}

loadUsa();
