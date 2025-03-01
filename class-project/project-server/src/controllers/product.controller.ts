import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.util";
import Product from "../models/product.model";



export const create = asyncHandler(async (req:Request,res:Response)=>{

    const body = req.body;
    console.log(req.file)
    const product = await Product.create(body)
    product.coverImage = req.file?.path

    await product.save()

    res.status(201).json({
        status:'success',
        success:true,
        data:product,
        message:'Product created successfully!'
    })

})


export const getAll = asyncHandler(async (req:Request,res:Response) =>{
    const products = await Product.find({}).populate('createdBy')

    res.status(200).json({
        success:true,
        status:'success',
        data:products,
        message:'Products fetched successfully!'
    })
})

