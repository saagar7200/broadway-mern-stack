import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.util";
import Product from "../models/product.model";
import CustomError from "../middlewares/errorhandler.middleare";



export const create = asyncHandler(async (req:Request,res:Response)=>{

    const body = req.body;
    console.log(req.files)
    const product = await Product.create(body)
    const {coverImage,images} = req.files as  {[fieldname: string]: Express.Multer.File[]};
    if(!coverImage){
        throw new CustomError('Cover image is required',400)
    }

    product.coverImage = coverImage[0]?.path

    if(images && images.length > 0){
       const imagePath:string[] = images.map((image:any,index:number) =>image.path)
       product.images = imagePath 
    }


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


export const getById = asyncHandler(async (req:Request,res:Response) =>{
    const id = req.params.id
    const product = await Product.findById(id).populate('createdBy')

    res.status(200).json({
        success:true,
        status:'success',
        data:product,
        message:'Product fetched successfully!'
    })
})
