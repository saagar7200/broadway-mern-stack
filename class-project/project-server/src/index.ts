import 'dotenv/config'
import express, { NextFunction, Request, Response } from 'express';
import { connectDatabase } from './config/database.config';
import CustomError from './middlewares/errorhandler.middleare'

// importing routes
import userRoutes from './routes/user.routes'
import productRoutes from './routes/product.routes'

const app = express();
const PORT = process.env.PORT || 8000
const DB_URI = process.env.DB_URI || ''

connectDatabase(DB_URI)

// using middlewares
app.use(express.urlencoded({extended:false}))


// using routes
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)

// handle not found path
app.all('*',(req:Request,res:Response,next:NextFunction) =>{

    const message = `can not ${req.method} on ${req.originalUrl}`

    const error = new CustomError(message,404)
    next(error)

})


// error handler

app.use((error:any,req:Request,res:Response,next:NextFunction)=>{
    const statusCode = error.statusCode || 500
    const status = error.status || 'error'
    const message = error.message || 'Something went wrong'

    res.status(statusCode).json({
        status,
        success:false,
        message
    })

})






app.listen(PORT,() => console.log(`Server is running at http://localhost:${PORT}`))