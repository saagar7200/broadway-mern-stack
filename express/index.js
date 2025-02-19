

const express = require('express');
const connectDatabase = require('./config/dbconnect')
const userRoutes = require('./routes/user.routes')

const app = express();
const PORT = 8000

const DB_URI = 'mongodb://127.0.0.1:27017/crud-users'

// connect db
connectDatabase(DB_URI)


// to parse req.body
app.use(express.urlencoded({extended:false}));
// app.use(express.json())



// using routes

app.use('/users',userRoutes)



app.use((err,req,res,next)=>{

    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        status:'Error',
        message:err.message || 'Something went wrong'
    })

})



app.listen(PORT,()=>{
    console.log(`Sever started at port: http://localhost:${PORT}`)
})









