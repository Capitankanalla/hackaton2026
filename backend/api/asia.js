const AssetsModel = require("../models/assetsModel.js");

const asia = [
  // 🇯🇵 NIKKEI 225 — JAPAN (TSE)
  { symbol: "7203.T", name: "Toyota", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "6758.T", name: "Sony", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "9984.T", name: "SoftBank Group", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "9432.T", name: "NTT Docomo", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "8306.T", name: "Mitsubishi UFJ", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "8058.T", name: "Mitsubishi Corp", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "8035.T", name: "Tokyo Electron", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "4063.T", name: "Shin-Etsu Chemical", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "6861.T", name: "Keyence", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },
  { symbol: "4502.T", name: "Takeda Pharmaceutical", type: "stock", exchange: "TSE", currency: "JPY", region: "ASIA", market: "ASIA" },

  // 🇭🇰 HANG SENG — HONG KONG (HKEX)
  { symbol: "0700.HK", name: "Tencent", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0941.HK", name: "China Mobile", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "3988.HK", name: "Bank of China", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "1299.HK", name: "AIA Group", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0005.HK", name: "HSBC Holdings", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0939.HK", name: "China Construction Bank", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "2318.HK", name: "Ping An Insurance", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0883.HK", name: "CNOOC", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },
  { symbol: "0388.HK", name: "HKEX", type: "stock", exchange: "HKEX", currency: "HKD", region: "ASIA", market: "ASIA" },

  // 🇨🇳 SSE / CSI 300 — CHINA (Shanghai / Shenzhen)
  { symbol: "600519.SS", name: "Kweichow Moutai", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601318.SS", name: "Ping An Insurance", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601398.SS", name: "ICBC Bank", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "600036.SS", name: "China Merchants Bank", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601857.SS", name: "PetroChina", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "000858.SZ", name: "Wuliangye Yibin", type: "stock", exchange: "SZSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "000333.SZ", name: "Midea Group", type: "stock", exchange: "SZSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "300750.SZ", name: "CATL", type: "stock", exchange: "SZSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601988.SS", name: "Bank of China", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" },
  { symbol: "601628.SS", name: "China Life Insurance", type: "stock", exchange: "SSE", currency: "CNY", region: "ASIA", market: "ASIA" }
];


async function syncAsia() {
  for (const asset of asia) {
    await AssetsModel.insertOrUpdateAsset(asset);
  }
}

module.exports = async (req, res) => {
  try {
    // 1️⃣ Actualitzar DB automàticament
    await syncAsia();

    // 2️⃣ Retornar dades al frontend
    res.json(asia);

  } catch (err) {
    console.error("Error a /api/asia:", err);
    res.status(500).json({ error: "Error carregant ASIA" });
  }
};


// async function loadAsia() {
//   console.log("Carregant ASIA...");

//   for (const asset of asia) {
//     await AssetsModel.insertOrUpdateAsset(asset);
//     console.log(`✔ ${asset.symbol}`);
//   }

//   console.log("ASIA carregat correctament.");
// }

loadAsia();
