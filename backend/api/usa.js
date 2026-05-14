const AssetsModel = require("../models/assetsModel.js");

const usa = [
  // NASDAQ
  { symbol: "AAPL", name: "Apple", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "MSFT", name: "Microsoft", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "AMZN", name: "Amazon", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "GOOGL", name: "Alphabet Class A", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "META", name: "Meta Platforms", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "NVDA", name: "NVIDIA", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },

  // S&P500
  { symbol: "BRK.B", name: "Berkshire Hathaway", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "JNJ", name: "Johnson & Johnson", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "JPM", name: "JPMorgan Chase", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "V", name: "Visa", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "PG", name: "Procter & Gamble", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },

  // DOW JONES
  { symbol: "DIS", name: "Walt Disney", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "HD", name: "Home Depot", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "INTC", name: "Intel", type: "stock", exchange: "NASDAQ", currency: "USD", region: "US", market: "USA" },
  { symbol: "KO", name: "Coca-Cola", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" },
  { symbol: "MCD", name: "McDonald's", type: "stock", exchange: "NYSE", currency: "USD", region: "US", market: "USA" }
];

async function loadUsa() {
  console.log("Carregant USA (NASDAQ + S&P500 + DOW JONES)...");

  for (const asset of usa) {
    await AssetsModel.insertOrUpdateAsset(asset);
    console.log(`✔ ${asset.symbol}`);
  }

  console.log("USA carregat correctament.");
}

loadUsa();
