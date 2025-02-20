const { customError } = require('../middlewares/custom-error-handler')
const User = require('../models/user.model')
const { catchAsyncHandler } = require('../utils/async-handle')


exports.getAllUser = async (req,res)=>{

    try{
     const users = await User.find()
 
     return res.status(200).json({

         success:true,
         status:'success',
         data:users,
         message:'Users fetched successfully'
     })
    }catch(error){
     return res.status(500).json({
         success:false,
         status:'error',
         message:error.message ?? 'Something went wrong',
         data:null
     })
    }
 
 }

 exports.create = catchAsyncHandler(async(req,res)=>{

        
    const body = req.body;
    console.log(body)

    const user = await User.create(body)

    console.log('new user',user)

    return res.status(201).json({
        success:true,
        status:'success',
        message:'User created successfully',
        data:user,
    })
        
    

})


exports.getById = catchAsyncHandler(async(req,res,next)=>{
    
        const userId = req.params.id

        const user = await User.findById(userId)

    if(!user){

        throw new customError('User not found',404)

    }

    return res.status(200).json({
        success:true,
        status:'success',
        message:'User fetched successfully',
        data:user
    })
   })




exports.update = catchAsyncHandler(async(req,res,next)=>{

    try{
        const id = req.params.id

    const body = req.body;
    console.log(body)
    const updatedUser = await User.findByIdAndUpdate(id,body,{new:true})

    if(!updatedUser){

        // return res.status(404).json({
        //     status:'Fail',
        //     message:'User not found.'
        // })
        throw new customError('User not found',404)


    }

    return res.status(201).json({
        status:'success',
        message:'User updated',
        data:updatedUser
    })

    }catch(error){

        return res.status(error.statusCode || 500).json({
            success:false,
            status:error.status || 'error',
            message:error.message ?? 'Something went wrong',
            data:null
        })
        // next(error)
    }

   

})


exports.deleteUser =async (req,res)=>{

    const id = req.params.id;

     await User.findByIdAndDelete(id)
      return res.status(200).json({
        status:'Success',
        message:'User Deleted.'
    })

    

}

