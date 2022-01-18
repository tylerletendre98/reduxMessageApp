const connectDB = require('./startup/db')
const express = require('express')
const cors = require('cors')
const users = require('./routes/users')
const app = express()

connectDB();
app.use(cors())
app.use(express.json())

app.use('/api/users',users)
// app.use('/api/messages', messages)


const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Successfully served on port: ${PORT}`)
})

