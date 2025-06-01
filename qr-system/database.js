const sqllite3 = require("sqlite3").verbose();
const db = new sqllite3.Database("./peoble.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS people(
        id TEXT,
        entry_time TEXT,
        exit_time TEXT,
        date TEXT
        )`);
});

module.exports = db;
