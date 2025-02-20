require('dotenv').config()
const express = require('express');
const connectDatabase = require('./config/dbconnect')
const userRoutes = require('./routes/user.routes');
const { customError,errorHandler } = require('./middlewares/custom-error-handler');

const app = express();
const PORT = process.env.PORT || 8080

const DB_URI =process.env.DB_URI

// connect db
connectDatabase(DB_URI)


// to parse req.body
app.use(express.urlencoded({extended:false}));
// app.use(express.json())



// using routes

app.use('/users',userRoutes);

app.all('*',(req,res,next)=>{
    const message =`Can not ${req.method} on ${req.originalUrl}`

    // res.status(404).json({
    //     status:'fail',
    //     success:false,
    //     message:`Can not ${req.method} on ${req.originalUrl}`

    // })

    // const err = new Error(message);
    const err  = new customError(message,404)
    // err.statusCode = 404


    next(err)

})



app.use(errorHandler)



app.listen(PORT,()=>{
    console.log(`Sever started at port: http://localhost:${PORT}`)
})









