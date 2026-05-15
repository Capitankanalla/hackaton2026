const BASE = "http://localhost:3000";

export async function getQuote(symbol) {
  const res = await fetch(`${BASE}/assets/${symbol}`);
  console.log("REFRESH SYMBOL:", symbol);

  return res.json();
}

export async function getAssetsByMarket(market) {
  const res = await fetch(`${BASE}/api/assets/${market}`);
  return res.json();
}
