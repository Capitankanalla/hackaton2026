const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔵 RUTES BACKEND (API)
const indexRoutes = require("./backend/routes/indexRoutes");
app.use("/api", indexRoutes);

// 🔵 FRONTEND (servei estàtic)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
