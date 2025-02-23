import { Request, Response } from "express";
import User from "../models/user.model";


export const register = async (req:Request,res:Response) =>{
    try {
        const body = req.body;
        await User.create(body)
        const user = new User()

        res.status(201).json({
            status:'success',
            success:true,
            message:'User registered successfully',
            data:user
        })
        
    } catch (error:any) {
        res.status(500).json({
            status:'fail',
            success:false,
            message:error?.message || 'Something went wrong'
        })    
    }

}

export const update = async (req:Request,res:Response) =>{
    try {

        const id = req.params.id
        const {firstName,lastName,gender,phoneNumber} = req.body;

       const user =  await User.findByIdAndUpdate(id,{
            firstName,
            lastName,
            gender,
            phoneNumber
        },{new:true})

        if(!user){
            res.status(404).json({
                status:'fail',
                success:false,
                message:'User not found'
            })

        }
       

        res.status(201).json({
            status:'success',
            success:true,
            message:'User registered successfully',
            data:user
        })

        
    } catch (error:any) {
        res.status(500).json({
            status:'fail',
            success:false,
            message:error?.message || 'Something went wrong'
        })   
        
    }
}


// export const login = (req,res) =>{

//     // 1. email pass <-- body

//     // 2.const user= user.findOne({email:email})

//     // 3 if !user ->  error

//     // 4. user.pass === body.pass 

//     // 5. if pass !==  --> error 

//     // 6 success response ==> login successful

// }

