const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kyro-task",
  multipleStatements: true,
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports = { connection };
