const BASE = "http://localhost:3000";

export async function getQuote(symbol) {
  const res = await fetch(`${BASE}/market/quote/${symbol}`);
  return res.json();
}