const AssetsModel = require("../models/assetsModel.js");

const asia = [
  // NIKKEI 225
  { symbol: "7203.T", name: "Toyota", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "6758.T", name: "Sony", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "9984.T", name: "SoftBank Group", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },

  // HANG SENG
  { symbol: "0700.HK", name: "Tencent", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0941.HK", name: "China Mobile", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "3988.HK", name: "Bank of China", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" }
];

async function loadAsia() {
  console.log("Carregant ASIA...");

  for (const asset of asia) {
    await AssetsModel.insertOrUpdateAsset(asset);
    console.log(`✔ ${asset.symbol}`);
  }

  console.log("ASIA carregat correctament.");
}

loadAsia();
