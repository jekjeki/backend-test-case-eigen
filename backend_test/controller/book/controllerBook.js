const connection = require("../../database/databaseConnection")

// get all book 
const getAllBook = (req, res) => {
    connection.query('SELECT * FROM book', (err, rows, fields) => {
        res.json(rows)
    })
}

module.exports = {
    getAllBook
}

