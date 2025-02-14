

const express = require('express');
const Users = require('./MOCK_DATA.json')
const fs = require('fs')


const app = express();
const PORT = 8000

// to parse req.body
app.use(express.urlencoded({extended:false}))

// get all users
app.get('/users',(req,res)=>{

    return res.json(Users)

})

// get user by id
// app.get('/users/:id',(req,res)=>{
//     console.log(req.params.id)

//     const userId = Number(req.params.id)

//     const user = Users.find((user) => user.id === userId)

//     return res.json(user)

// })

app.post('/users',(req,res)=>{
    const body = req.body;
    console.log(body)

    Users.push({...body,id:Users.length + 1});

    fs.writeFile('MOCK_DATA.json',JSON.stringify(Users),(err,data)=>{
       return res.json({
            status:'success',
            message:'User created successfully',
            id:Users.length
        })
    })

    

})

app.patch('/users/:id',(req,res)=>{

    res.json({
        status:'pending'
    })

})

app.delete('/users/:id',(req,res)=>{

    res.json({
        status:'pending'
    })

})

app.route('/users/:id').get((req,res)=>{
    console.log(req.params.id)

    const userId = Number(req.params.id)

    const user = Users.find((user) => user.id === userId)

    return res.json(user)

}).patch((req,res)=>{



    return res.json({
        status:'pending'
    })

}).delete((req,res)=>{

    return res.json({
        status:'pending'
    })

})



app.listen(PORT,()=>{
    console.log(`Sever started at port: http://localhost:${PORT}`)
})