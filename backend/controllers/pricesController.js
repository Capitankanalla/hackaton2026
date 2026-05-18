 const Rapid = require("../api/rapidService");
 const { ibex35 } = require("../api/markets");

 // helper: evita crashes cuando no hay datos
 function safeArray(value) {
   return Array.isArray(value) ? value : [];
 }

 module.exports = {
   // GET /api/prices/:symbol
   async getPriceHistory(req, res) {
     try {
       let symbol = req.params.symbol.toLowerCase(); 
    //  MAPEO DE MERCADOS A TICKERS REALES (ETFs seguros)
    if (symbol === "ibex35" || symbol === "ibex") {
      symbol = "EWP"; // Spain ETF
    }
    if (symbol === "europe") {
      symbol = "VGK"; // Europe ETF
    }
    if (symbol === "usa") {
      symbol = "SPY"; // S&P 500 ETF (más estable que mercado suelto)
    }
    if (symbol === "asia") {
      symbol = "AAXJ"; // Asia ex Japan ETF
    }
       // acciones normales
       const data = await Rapid.getPriceHistory(symbol);
      
       const result = data?.chart?.result?.[0];
       if (!result) {
       return res.status(404).json({
         error: "No data for symbol"
       });
       }
       const timestamps = result.timestamp;
       const quotes = result.indicators.quote[0];

      formatted = timestamps.map((t, i) => ({
         t,
         o: quotes.open[i],
         h: quotes.high[i],
         l: quotes.low[i],
         c: quotes.close[i],
       }));

       res.json(formatted);

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
