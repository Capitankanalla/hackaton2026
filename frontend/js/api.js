const BASE = `http://${process.env.DB_HOST}:${process.env.DB_PORT || 3000}`;

export async function getQuote(symbol) {
  const res = await fetch(`${BASE}/api/assets/${symbol}`);
  return res.json();
}

export async function getAssetsByMarket(market) {
  const res = await fetch(`${BASE}/api/markets/${market}`);
  return res.json();
}
