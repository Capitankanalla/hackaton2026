import { state } from "./state.js";
import { getQuote } from "./api.js";
import { renderMarketList, renderQuote } from "./ui.js";

async function loadMarket(symbol) {
  const data = await getQuote(symbol);
  renderQuote(data);
}

function selectMarket(symbol) {
  state.selected = symbol;
  loadMarket(symbol);
}

renderMarketList(selectMarket);

// initial load
loadMarket(state.selected);

// refresh cada 30s
setInterval(() => {
  loadMarket(state.selected);
}, 30000);

import { getAssetsByMarket } from "./api.js";
import { renderCarousel } from "./ui.js";

const heroSelect = document.getElementById("market-select");

heroSelect.addEventListener("change", async (e) => {
  const market = e.target.value;
  state.selected = market;

  const assets = await getAssetsByMarket(market);
  renderCarousel(assets);
});

// carregar carroussel inicial
(async () => {
  const assets = await getAssetsByMarket(state.selected);
  renderCarousel(assets);
})();
