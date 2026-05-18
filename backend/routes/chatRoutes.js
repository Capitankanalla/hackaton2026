const express = require("express");
const router = express.Router();

// Simple system prompt for now - will be refined later
const SYSTEM_PROMPT = "Ets un assistent de mercats financers. Respon breument en català.";

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: "Missatge buit" });
    }

    // Call the LM Studio API
    const response = await fetch(`http://${process.env.CHATBOT_IP}:${process.env.CHATBOT_PORT}/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen/qwen3-coder-30b",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: message }
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

    res.json({ response: aiResponse });
  } catch (error) {
    console.error("Error en el chatbot:", error);
    // Return a friendly error message instead of exposing internal errors
    res.status(500).json({ 
      error: "Ho sento, l'assistent no està disponible ara. Prova més tard." 
    });
  }
});

module.exports = router;