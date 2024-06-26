const express = require('express')
const router = express.Router()
const { getAllBook } = require('../../controller/book/controllerBook')

router.get('/get-all-book', getAllBook)

module.exports = router