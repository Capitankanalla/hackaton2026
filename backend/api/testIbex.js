require("dotenv").config();
const { getQuote } = require("./rapidService.js");

async function run() {
  const data = await getQuote("SAN.MC");
  console.log(data);
}

run();
