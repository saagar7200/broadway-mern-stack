import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.util";
import Category from "../models/category.model";


export const create = asyncHandler(async (req:Request,res:Response)=>{

    const body = req.body;
    const category = await Category.create(body)

    res.status(201).json({
        status:'success',
        success:true,
        data:category,
        message:'Category created successfully!'
    })

})


export const getAll = asyncHandler(async (req:Request,res:Response) =>{
    const categories = await Category.find({})

    res.status(200).json({
        success:true,
        status:'success',
        data:categories,
        message:'Categories fetched successfully!'
    })
})

