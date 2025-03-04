import mongoose from "mongoose";


export enum Role {
    user= 'USER',
    admin= 'ADMIN'
}

export interface IPayload {
    _id:mongoose.Types.ObjectId;
    email:string;
    firstName:string;
    lastName:string;
    role:Role
}