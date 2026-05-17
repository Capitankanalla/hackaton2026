const Rapid = require("../api/rapidService");

module.exports = {
  // GET /api/prices/:symbol
  async getPriceHistory(req, res) {
    try {
      const symbol = req.params.symbol.toUpperCase();

      const data = await Rapid.getPriceHistory(symbol);

      const timestamps = data.timestamp;
      const quotes = data.indicators.quote[0];

      const result = timestamps.map((t, i) => ({
        t,
        c: quotes.close[i],
        o: quotes.open[i],
        h: quotes.high[i],
        l: quotes.low[i]
      }));

      res.json(result);

    } catch (err) {
      console.error("Error getPriceHistory:", err);
      res.status(500).json({ error: "Error obtenint històric de preus" });
    }
  },

  // GET /api/prices/latest/:symbol
  async getLatestPrice(req, res) {
    try {
      const symbol = req.params.symbol.toUpperCase();

      const data = await Rapid.getQuote(symbol);

      const price = data?.price || data?.regularMarketPrice || null;
      const changePercent = data?.regularMarketChangePercent || null;

      res.json({
        symbol,
        price,
        changePercent
      });

    } catch (err) {
      console.error("Error getLatestPrice:", err);
      res.status(500).json({ error: "Error obtenint últim preu" });
    }
  }
};


// const AssetPrices = require("../models/assetPrices");
// const AssetsModel = require("../models/assetsModel");

// module.exports = {
//   async getPriceHistory(req, res) {
//     try {
//       const { symbol } = req.params;

//       const asset = await AssetsModel.getBySymbol(symbol);
//       if (!asset) return res.status(404).json({ error: "Actiu no trobat" });

//       const history = await AssetPrices.getHistoryByAssetId(asset.id);
//       res.json(history);

//     } catch (err) {
//       console.error("Error getPriceHistory:", err);
//       res.status(500).json({ error: "Error obtenint històric de preus" });
//     }
//   },

//   async getLatestPrice(req, res) {
//     try {
//       const { symbol } = req.params;

//       const asset = await AssetsModel.getBySymbol(symbol);
//       if (!asset) return res.status(404).json({ error: "Actiu no trobat" });

//       const latest = await AssetPrices.getLatestByAssetId(asset.id);
//       res.json(latest);

//     } catch (err) {
//       console.error("Error getLatestPrice:", err);
//       res.status(500).json({ error: "Error obtenint últim preu" });
//     }
//   }
// };
