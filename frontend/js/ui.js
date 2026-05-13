import { state } from "./state.js";

export function renderMarketList(onSelect) {
  const container = document.getElementById("marketList");

  container.innerHTML = "";

  state.markets.forEach(m => {
    const div = document.createElement("div");
    div.className = "market-item";
    div.innerText = m;

    div.onclick = () => onSelect(m);

    container.appendChild(div);
  });
}

export function renderQuote(data) {
  document.getElementById("symbol").innerText = data.symbol;
  document.getElementById("price").innerText = data.price;
  document.getElementById("change").innerText = data.percent + "%";
}