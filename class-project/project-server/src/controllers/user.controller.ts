import { Request, Response } from "express";
import User from "../models/user.model";
import {hash,compare} from '../utils/bcrypt.util'
import { generateToken } from "../utils/jwt.util";
import { IPayload } from "../@types/jwt.interface";


export const register = async (req:Request,res:Response) =>{
    try {
        const body = req.body;

        if(!body.password){
            res.status(400).json({
                status:'fail',
                success:false,
                message:'password is required'
            })  

        }
        const hashedPassword = await hash(body.password)



        console.log("👊 ~ user.controller.ts:11 ~ register ~ hashedPassword:", hashedPassword)

        // 
        body.password = hashedPassword
        
       const user = await User.create(body)
        // const user = new User()

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


export const login = async (req:Request,res:Response) =>{
    try{
        // 1. email pass <-- body

    const {email,password} = req.body

    if(!email){
        res.status(400).json({
            status:'fail',
            success:false,
            message:'Email is required'
        })   
    }

    if(!password){
        res.status(400).json({
            status:'fail',
            success:false,
            message:'password is required'
        })   
    }

    // 2.const user= user.findOne({email:email})

    const user = await  User.findOne({email})


    // 3 if !user ->  error
    if(!user){
        res.status(400).json({
            status:'fail',
            success:false,
            message:'Email or password does not match'
        })
        return   
    }

    // 4. compare hash

    const isMatch = compare(password, user.password)

    if(!isMatch){
        res.status(400).json({
            status:'fail',
            success:false,
            message:'Email or password does not match'
        })
        return   
    }

    const payload:IPayload = {
        _id:user._id,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName,
        role:user.role

    }

    const token = generateToken(payload)

    console.log("👊 ~ user.controller.ts:151 ~ login ~ token:", token)



    res.cookie('access_token',token,{
        httpOnly:true,
        secure:process.env.NODE_ENV === 'production'
    }).status(200).json({
        status:'success',
        success:true,
        message:'Login success',
        token
    })


    }catch(error:any){
        res.status(500).json({
            status:'fail',
            success:false,
            message:error?.message || 'Something went wrong'
        }) 

    }

}

