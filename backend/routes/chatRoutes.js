const express = require("express");
const router = express.Router();
const AssetsModel = require("../models/assetsModel");
const AssetPricesModel = require("../models/assetPricesModel");

// Enhanced system prompt with financial context capabilities
const SYSTEM_PROMPT = `Ets un assistent de mercats financers expert en preus d'actius i informació de mercat. Respon breument en català.
Quan l'usuari pregunti per preus o dades de mercat, utilitza les dades disponibles del sistema. Si no tens informació específica, digues-ho clarament.

Respon amb informació precisa i actualitzada basada en dades reals del mercat. Inclou sempre el símbol de l'actiu quan faci referència a preus o dades de mercat.`;

// Function to extract financial symbols from messages
function extractSymbols(message) {
  // Match common stock market symbols (alphanumeric with possible dots/hyphens)
  const symbolRegex = /[A-Z0-9]{1,10}([.-][A-Z0-9]{1,5})?/g;
  const matches = message.match(symbolRegex);
  
  if (!matches) return [];
  
  // Filter out common non-financial terms
  return matches.filter(symbol => {
    const lowerSymbol = symbol.toLowerCase();
    return ![
      'and', 'the', 'for', 'of', 'to', 'in', 'on', 'at', 'by', 'is', 
      'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do',
      'does', 'did', 'will', 'would', 'could', 'should', 'may', 'might'
    ].includes(lowerSymbol);
  });
}

// Function to get financial data for symbols
async function getFinancialData(symbols) {
  const data = {};
  
  for (const symbol of symbols) {
    try {
      // Try to get the asset by symbol
      const asset = await AssetsModel.getBySymbol(symbol);
      if (!asset) continue;
      
      // Get latest price for this asset
      const latestPrice = await AssetPricesModel.getLatestByAssetId(asset.id);
      
      data[symbol] = {
        asset: asset,
        price: latestPrice
      };
    } catch (error) {
      console.error(`Error getting data for symbol ${symbol}:`, error);
      // Continue with other symbols even if one fails
    }
  }
  
  return data;
}

// Function to enrich message with financial context
function enrichMessageWithFinancialData(message, financialData) {
  if (Object.keys(financialData).length === 0) {
    return message;
  }

  let enrichedMessage = message;
  
  // Add financial context to the message
  const contextInfo = Object.entries(financialData)
    .map(([symbol, data]) => {
      if (data.price && data.asset) {
        return `${symbol}: ${data.asset.name} - Preu: ${data.price.price} (${data.price.timestamp ? new Date(data.price.timestamp).toLocaleDateString() : 'Data no disponible'})`;
      }
      return '';
    })
    .filter(Boolean)
    .join('\n');
  
  if (contextInfo) {
    enrichedMessage += `\n\nContext financer disponible:\n${contextInfo}`;
  }
  
  return enrichedMessage;
}

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Missatge buit" });
    }

    // Extract financial symbols from the message
    const symbols = extractSymbols(message);
    let financialData = {};
    
    if (symbols.length > 0) {
      // Get financial data for all found symbols
      financialData = await getFinancialData(symbols);
    }

    // Enrich the user message with financial context
    const enrichedMessage = enrichMessageWithFinancialData(message, financialData);

    // Call the LM Studio API with enriched prompt and message
    const response = await fetch(`http://${process.env.CHATBOT_IP}:${process.env.CHATBOT_PORT}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen/qwen3-coder-30b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: enrichedMessage }
        ],
        temperature: 0.7,
        max_tokens: 512
      }),
      // 15 second timeout
      signal: AbortSignal.timeout(15000)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content.trim();

    res.json({ 
      response: aiResponse,
      financialData: financialData
    });
  } catch (error) {
    console.error("Error en el chatbot:", error);
    // Return a friendly error message instead of exposing internal errors
    res.status(500).json({ 
      error: "Ho sento, l'assistent no està disponible ara. Prova més tard." 
    });
  }
});

module.exports = router;