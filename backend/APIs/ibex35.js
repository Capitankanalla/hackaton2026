const AssetsModel = require("../models/assetsModel.js");

const ibex35 = [
  { symbol: "SAN.MC", name: "Banco Santander", exchange: "MC", currency: "EUR" },
  { symbol: "BBVA.MC", name: "BBVA", exchange: "MC", currency: "EUR" },
  { symbol: "IBE.MC", name: "Iberdrola", exchange: "MC", currency: "EUR" },
  { symbol: "ITX.MC", name: "Inditex", exchange: "MC", currency: "EUR" },
  { symbol: "TEF.MC", name: "Telefónica", exchange: "MC", currency: "EUR" },
  { symbol: "REP.MC", name: "Repsol", exchange: "MC", currency: "EUR" },
  { symbol: "ACS.MC", name: "ACS", exchange: "MC", currency: "EUR" },
  { symbol: "AENA.MC", name: "Aena", exchange: "MC", currency: "EUR" },
  { symbol: "MEL.MC", name: "Meliá Hotels", exchange: "MC", currency: "EUR" },
  { symbol: "FER.MC", name: "Ferrovial", exchange: "MC", currency: "EUR" },
  { symbol: "GRF.MC", name: "Grifols", exchange: "MC", currency: "EUR" },
  { symbol: "CLNX.MC", name: "Cellnex", exchange: "MC", currency: "EUR" },
  { symbol: "MAP.MC", name: "Mapfre", exchange: "MC", currency: "EUR" },
  { symbol: "SAB.MC", name: "Banco Sabadell", exchange: "MC", currency: "EUR" },
  { symbol: "ENG.MC", name: "Enagás", exchange: "MC", currency: "EUR" },
  { symbol: "NTGY.MC", name: "Naturgy", exchange: "MC", currency: "EUR" },
  { symbol: "RED.MC", name: "Redeia", exchange: "MC", currency: "EUR" },
  { symbol: "COL.MC", name: "Inmobiliaria Colonial", exchange: "MC", currency: "EUR" },
  { symbol: "IAG.MC", name: "IAG", exchange: "MC", currency: "EUR" },
  { symbol: "AMS.MC", name: "Amadeus", exchange: "MC", currency: "EUR" },
  { symbol: "ROVI.MC", name: "Laboratorios Rovi", exchange: "MC", currency: "EUR" },
  { symbol: "PHM.MC", name: "PharmaMar", exchange: "MC", currency: "EUR" },
  { symbol: "ACX.MC", name: "Acerinox", exchange: "MC", currency: "EUR" },
  { symbol: "CIE.MC", name: "CIE Automotive", exchange: "MC", currency: "EUR" },
  { symbol: "ELE.MC", name: "Endesa", exchange: "MC", currency: "EUR" },
  { symbol: "ALM.MC", name: "Almirall", exchange: "MC", currency: "EUR" },
  { symbol: "ANA.MC", name: "Acciona", exchange: "MC", currency: "EUR" },
  { symbol: "FCC.MC", name: "FCC", exchange: "MC", currency: "EUR" }
];

async function loadIbex() {
  console.log("Carregant IBEX35...");

  for (const asset of ibex35) {
    await AssetsModel.insertOrUpdateAsset({
      symbol: asset.symbol,
      name: asset.name,
      market: "IBEX35",
      currency: asset.currency,
      type: "stock",
      exchange: asset.exchange,
      region: "EU"
    });

    console.log(`✔ Inserit/actualitzat: ${asset.symbol}`);
  }

  console.log("IBEX35 carregat correctament.");
}

loadIbex();
