const { db } = require("./db.js");

(async () => {
  const [rows] = await db.query("SHOW TABLES");
  console.log(rows);
})();