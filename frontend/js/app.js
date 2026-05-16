import { state } from "./state.js";
import { getQuote, getAssetsByMarket } from "./api.js";
import { renderMarketList, renderQuote, renderTicker } from "./ui.js";
import { initChart } from "./chart.js";
/* ---------------------------------------------------
   CARREGA QUOTE PRINCIPAL
--------------------------------------------------- */
async function loadMarket(symbol) {
  try {
    const data = await getQuote(symbol);
    renderQuote(data);
  } catch (err) {
    console.error("Error carregant dades del mercat:", err);
  }
}

function selectMarket(symbol) {
  state.selected = symbol;
  loadMarket(symbol);
}

renderMarketList(selectMarket);

/* Carrega inicial */
loadMarket(state.selected);
document.addEventListener("DOMContentLoaded", () => {
  initChart(state.selected); // ibex35 per defecte
});

/* Refresc cada 30s */
setInterval(() => {
  loadMarket(state.selected);
}, 30000);


/* ---------------------------------------------------
   TICKER DEL HEADER
--------------------------------------------------- */
const marketSelect = document.getElementById("market-select");

marketSelect.addEventListener("change", async (e) => {
  const market = e.target.value;
  state.selected = market;

  try {
    const assets = await getAssetsByMarket(market);
    renderTicker(assets);
  } catch (err) {
    console.error("Error carregant ticker:", err);
  }
});

/* Carrega inicial del ticker */
(async () => {
  try {
    const assets = await getAssetsByMarket(state.selected);
    renderTicker(assets);
  } catch (err) {
    console.error("Error carregant ticker inicial:", err);
  }
})();
