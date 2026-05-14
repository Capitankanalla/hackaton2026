const AssetPrices = require("../models/assetPrices");
const AssetsModel = require("../models/assetsModel");

module.exports = {
    async getPriceHistory(req, res) {
        try {
            const { symbol } = req.params;

            // 1) Convertir symbol → asset_id
            const asset = await AssetsModel.getBySymbol(symbol);
            if (!asset) return res.status(404).json({ error: "Actiu no trobat" });

            // 2) Obtenir històric per asset_id
            const history = await AssetPrices.getHistoryByAssetId(asset.id);
            res.json(history);

        } catch (err) {
            console.error("Error getPriceHistory:", err);
            res.status(500).json({ error: "Error obtenint històric de preus" });
        }
    },

    async getLatestPrice(req, res) {
        try {
            const { symbol } = req.params;

            // 1) Convertir symbol → asset_id
            const asset = await AssetsModel.getBySymbol(symbol);
            if (!asset) return res.status(404).json({ error: "Actiu no trobat" });

            // 2) Obtenir últim preu per asset_id
            const latest = await AssetPrices.getLatestByAssetId(asset.id);
            res.json(latest);

        } catch (err) {
            console.error("Error getLatestPrice:", err);
            res.status(500).json({ error: "Error obtenint últim preu" });
        }
    }
};
