const express = require('express')
const app = express()

// ejs and views 
app.set('view engine', 'ejs')
app.set('views', 'views')

// public
app.use(express.static('public'))

// routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))

// views


app.listen(4000, ()=>{
    console.log("listening on port 4000")
})