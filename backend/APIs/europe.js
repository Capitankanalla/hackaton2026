const AssetsModel = require("../models/assetsModel.js");

const europe = [
  // EURO STOXX 50
  { symbol: "SAP", name: "SAP SE", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "SIE", name: "Siemens", type: "stock", exchange: "XETRA", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "AIR", name: "Airbus", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "OR", name: "L'Oréal", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },
  { symbol: "MC", name: "LVMH", type: "stock", exchange: "EURONEXT", currency: "EUR", region: "EU", market: "EUROPE" },

  // FTSE 100
  { symbol: "HSBA", name: "HSBC Holdings", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "BP", name: "BP PLC", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" },
  { symbol: "AZN", name: "AstraZeneca", type: "stock", exchange: "LSE", currency: "GBP", region: "EU", market: "EUROPE" }
];

async function loadEurope() {
  console.log("Carregant EUROPE...");

  for (const asset of europe) {
    await AssetsModel.insertOrUpdateAsset(asset);
    console.log(`✔ ${asset.symbol}`);
  }

  console.log("EUROPE carregat correctament.");
}

loadEurope();
