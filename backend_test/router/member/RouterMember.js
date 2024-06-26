const express = require('express')
const router = express.Router()

const {
    getAllMemberData,
    insertDataBorrowingBook
} = require('../../controller/member/ControllerMember.js')


router.get('/get-all-member', getAllMemberData)
router.post('/borrowing-book', insertDataBorrowingBook)

module.exports = router