const express = require('express')
const app = express()  
const PORT = 3000;
const router = require('./routes')
const session = require('express-session');

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'secret'
}))
app.use('/',router)


app.listen(PORT,()=>{
    console.log(`connecting http://localhost:${PORT}`)
})  