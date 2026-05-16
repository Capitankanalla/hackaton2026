/* ---------------------------------------------------
   RENDER LLISTA DE MERCATS (sidebar esquerra)
--------------------------------------------------- */
export function renderMarketList(onSelect) {
  const container = document.getElementById("marketList");
  container.innerHTML = "";

  const markets = [
    { symbol: "ibex35", name: "España (IBEX35)" },
    { symbol: "usa", name: "USA (NASDAQ + S&P500)" },
    { symbol: "europe", name: "Europa" },
    { symbol: "asia", name: "Asia" }
  ];

  markets.forEach(m => {
    const div = document.createElement("div");
    div.className = "market-item";
    div.textContent = m.name;

    div.addEventListener("click", () => onSelect(m.symbol));

    container.appendChild(div);
  });
}


/* ---------------------------------------------------
   RENDER QUOTE PRINCIPAL (panell central)
--------------------------------------------------- */
export function renderQuote(data) {
  if (!data) return;

  document.getElementById("symbol").textContent = data.symbol || "--";
  document.getElementById("price").textContent = data.price || "--";

  const changeEl = document.getElementById("change");

  if (data.changePercent !== undefined) {
    const pct = data.changePercent.toFixed(2) + "%";
    changeEl.textContent = pct;

    changeEl.style.color = data.changePercent >= 0 ? "#0ecb81" : "#f6465d";
  } else {
    changeEl.textContent = "--";
    changeEl.style.color = "white";
  }
}


/* ---------------------------------------------------
   RENDER TICKER (header)
--------------------------------------------------- */
export function renderTicker(assets) {
  const container = document.getElementById("ticker-container");
  container.innerHTML = "";

  if (!assets || assets.length === 0) {
    container.innerHTML = "<p>No hi ha dades disponibles</p>";
    return;
  }

  assets.forEach(asset => {
    const item = document.createElement("div");
    item.className = "ticker-item";

    item.innerHTML = `
      <div class="ticker-symbol">${asset.symbol}</div>
      <div class="ticker-name">${asset.name || ""}</div>
    `;

    container.appendChild(item);
  });

  // Opcional: animació de ticker (scroll infinit)
  startTickerScroll(container);
}


/* ---------------------------------------------------
   ANIMACIÓ DEL TICKER (scroll infinit)
--------------------------------------------------- */
function startTickerScroll(container) {
  container.style.transition = "none";
  container.style.transform = "translateX(0)";

  let pos = 0;

  function animate() {
    pos -= 0.5; // velocitat
    container.style.transform = `translateX(${pos}px)`;

    // Quan s'ha mogut massa, reinicia
    if (Math.abs(pos) > container.scrollWidth / 2) {
      pos = 0;
    }

    requestAnimationFrame(animate);
  }

  animate();
}
