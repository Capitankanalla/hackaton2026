export async function getQuote(symbol) {
  const res = await fetch(`/api/prices/latest/${symbol}`);
  return res.json();
}

export async function getAssetsByMarket(market) {
  const res = await fetch(`/api/markets/${market}`);
  return res.json();
}
