const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// 🔵 ENDPOINT MARKET QUOTE
app.get("/market/quote/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;

    const response = await axios.get(
      `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${process.env.FINNHUB_KEY}`
    );

    const data = response.data;

    res.json({
      symbol,
      price: data.c,
      change: data.d,
      percent: data.dp,
    });

  } catch (error) {
    res.status(500).json({ error: "Error fetching market data" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});