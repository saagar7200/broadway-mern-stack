

class customError extends Error {

    constructor(message,statusCode){
        super(message)
        this.statusCode = statusCode
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error'
        this.success = false
        this.isOperational = true
        
        Error.captureStackTrace(this,customError)

    }

}


const errorHandler = (err,req,res,next)=>{

        const statusCode = err.statusCode || 500
        const message = err.message || 'Something went wrong'
    
        res.status(statusCode).json({
            status:err.status ?? 'error',
            success:err?.success ?? false,
            message:message
        })
    
    }



module.exports = {customError,errorHandler}