const axios = require("axios");
require("dotenv").config();

const rapid = axios.create({
  baseURL: "https://yahoo-finance-real-time1.p.rapidapi.com",
  headers: {
    "Content-Type": "application/json",
    "x-rapidapi-key": process.env.RAPIDAPI_KEY,
    "x-rapidapi-host": process.env.RAPIDAPI_HOST,
  },
});

async function getQuote(symbol) {
  const res = await rapid.get("/stock/get-summary", {
    params: {
      symbol,
      region: "ES",
    },
  });

  return res.data;
}

module.exports = { getQuote };
