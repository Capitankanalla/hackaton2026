const AssetsModel = require("../models/assetsModel.js");



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
