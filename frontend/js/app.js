import { state } from "./state.js";
import { getQuote, getAssetsByMarket } from "./api.js";
import { renderMarketList, renderQuote, renderTicker } from "./ui.js";
import { initChart } from "./chart.js";
import { loadComponent } from "./loadComponents.js";

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
  initChart(symbol); // Actualitza la gràfica quan canvies de mercat
}

renderMarketList(selectMarket);

/* ---------------------------------------------------
   INICIALITZACIÓ COMPLETA
--------------------------------------------------- */
(async () => {
  // 1) Carregar component de la gràfica
  await loadComponent("chart-container", "chart.html");

  // 2) Carregar mercat inicial
  await loadMarket(state.selected);

  // 3) Inicialitzar gràfica amb el mercat per defecte
  initChart(state.selected);

  // 4) Carregar ticker inicial
  const assets = await getAssetsByMarket(state.selected);
  renderTicker(assets);

  // 5) Refresc cada 30s
  setInterval(() => {
    loadMarket(state.selected);
  }, 30000);
})();
