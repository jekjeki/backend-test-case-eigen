const connection = require('../../database/databaseConnection.js')
const memberData = require('../../database/memberData.js')

// get all member 
const getAllMemberData = ((req, res)=>{
    connection.query(`SELECT * FROM member`, (err, rows, fields) => {
        if(err) throw err 

        res.json(rows)
    })
})

// function check count member total borrowing book 
const calculateTotalCountBook = (memberid) => {

   connection.query(`SELECT COUNT(memberid)
        FROM borrowingbook WHERE memberid = '${memberid}'`, (error, rows, fields)=>{
            if(error) throw error

            res.json(rows)
        })
}

// member borrow book 
const insertDataBorrowingBook = ((req, res)=>{

    // 

    connection.query(`SELECT COUNT(memberid)
        FROM borrowingbook WHERE memberid = '${req.body.memberid}'`, (error, rows, fields)=>{
            if(error) throw error

            res.json(rows)
        })

    // connection.query(`INSERT INTO borrowingbook VALUES 
    // ('${req.body.borrowingId}', '${req.body.memberid}', 
    // '${req.body.bookid}', '${req.body.isBorrow}', 
    // '${req.body.borrowingStartDate}', '${req.body.borrowingEndDate}')`, 
    // (error, rows, fields) => {
    //     if(error) throw error

    //     res.json({
    //         "status": "data success inserted !", 
    //     })
    // })
})

module.exports = {
    getAllMemberData,
    insertDataBorrowingBook
}