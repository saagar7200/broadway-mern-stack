
const mongoose = require('mongoose');

// defining user schema
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required'],
        trim:true
    },
    email:{
        type:String,
        required:[true,'Name is required'],
        unique:[true,'User already exists with provided email']
    },
    age:{
        type:Number,
        required:false
    }
})

const User = mongoose.model('user',userSchema)

module.exports = User