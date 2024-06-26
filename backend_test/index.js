const express = require('express')
const app = express()
const member_routes = require('./router/member/RouterMember.js')
const book_routes = require('./router/book/RouterBook.js')

app.use(express.json())
app.use('/member', member_routes)
app.use('/book', book_routes)

app.get('/', (req,res)=>{
    res.status(200)
    res.send({
        "message": "welcome to this backend project"
    })
})

app.listen(8080, (error)=>{
    if(!error){
        console.log(`server running in http://localhost:${8080}`)
    }
})