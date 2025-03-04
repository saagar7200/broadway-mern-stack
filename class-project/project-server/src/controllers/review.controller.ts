import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.util";
import Review from "../models/review.model";
import Product from '../models/product.model';
import CustomError from '../middlewares/errorhandler.middleare'


export const create = asyncHandler(async (req:Request,res:Response)=>{

    const body = req.body;
    const {userId,productId,rating} = body
    if(!userId || !productId){
        throw new CustomError('userId and productId is required',400)
    }
    const product = await Product.findById(productId)

    if(!product){
        throw new CustomError('Product not found',404)
    }
    const newReview = await Review.create({...body,product:productId,user:userId})

    product.reviews.push(newReview._id)



    console.log(product?.averageRating,rating)

    const totalRating:number = (product?.averageRating as number * (product.reviews.length - 1)) + Number(rating);



    product.averageRating = totalRating / product.reviews.length

    await product.save()


    res.status(201).json({
        status:'success',
        success:true,
        data:newReview,
        message:'Review created successfully!'
    })

})









export const getAll = asyncHandler(async (req:Request,res:Response) =>{
    const reviews = await Review.find({})

    res.status(200).json({
        success:true,
        status:'success',
        data:reviews,
        message:'Reviews fetched successfully!'
    })
})

// update 


// delete 



// get reviews by product id

