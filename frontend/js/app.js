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