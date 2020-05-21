const mysql = require("mysql2")

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "jl_entreprise",
  password: "Mars!2020",
  waitForConnections: true
})

pool.getConnection(error => {
  if (!error) console.log("db conntected")
  else console.log("dn connexion fail")
})

module.exports = pool.promise()
