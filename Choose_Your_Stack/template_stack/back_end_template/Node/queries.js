const Pool = require('pg').Pool
let config = require('../db_config.json');
const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.dbname,
  password: config.password,
  port: config.port,
})
const runQuery = (request, response) => { 
    pool.query(config.query,(error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Query Executed SuccessFully`)
    })
  }

module.exports = {
  runQuery
}