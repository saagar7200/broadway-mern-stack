
const mongoose = require('mongoose');

function connectDatabase(url){

    mongoose.connect(url)
    .then(()=>{console.log('Database connected.')})
    .catch((err)=>console.log(err))
}

module.exports = connectDatabase