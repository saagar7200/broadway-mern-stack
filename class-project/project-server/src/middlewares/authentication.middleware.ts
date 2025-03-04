import { NextFunction, Request ,Response } from "express"
import CustomError from "./errorhandler.middleare"
import { Role } from "../@types/global.types"
import { verifyToken } from "../utils/jwt.util"
import User from "../models/user.model"



export const Authenticate = (roles?:Role[]):(req: Request, res: Response, next: NextFunction) => Promise<void> =>{

    return async (req:Request,res:Response,next:NextFunction) => {
        try{

            const token = req.headers['authorization'] as string

            console.log("👊 ~ authentication.middleware.ts:15 ~ return ~ token:", req.headers['authorization'])

            if(!token || !token.startsWith('BEARER') ){
                throw new CustomError('Unauthorized, access denied',401)
            }

            const access_token = token.split(' ')[1]

            console.log("👊 ~ authentication.middleware.ts:23 ~ return ~ access_token:", access_token)


            if(!access_token){
                throw new CustomError('Unauthorized, access denied',401)

            }

            const decoded = verifyToken(access_token) 

            if(decoded.exp && decoded.exp * 1000 > Date.now()){
                throw new CustomError('Unauthorized, access denied',401)

            }

            console.log("👊 ~ authentication.middleware.ts:27 ~ return ~ decoded:", decoded)

            if(!decoded){
                throw new CustomError('Unauthorized, Invalid token',401)
            }

            if(roles && !roles.includes(decoded.role)){

                throw new CustomError('Forbidden, unauthorized to access this resource',401)

            }

            const user  = await  User.findById(decoded._id);

            if(!user){
                throw new CustomError('User not found',404)

            }


            // ts-expect-error
            req.user = {
                _id:decoded._id,
                firstName:decoded.firstName,
                lastName:decoded.lastName,
                role:decoded.role,
                email:decoded.email
            } 

            next()

        }catch(err:any){
            throw new CustomError(err?.message ?? 'Something wend wrong', 500)
        }

    }

}