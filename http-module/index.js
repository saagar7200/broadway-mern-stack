
// restful

// GET

// POST
// PUT
// PATCH
// DELETE

const http = require('http')
const fs = require('fs');
const url = require('url')


const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end()
    
        const parsedUrl = url.parse(req.url,true)
        console.log(parsedUrl)

    const log = `New ${req.method} Req. ${Date.now()}:  ${req.url} received\n`



    fs.appendFile('log.txt',log,(err,result)=>{
        switch(parsedUrl.pathname){
            case '/':
                res.end('Home Page');
                break;
            case '/about':
                // 
                res.end(`Hello ${parsedUrl.query.name}. You are ${parsedUrl.query.age}.`);
                break;
            case '/sign-up':
                if(req.method === "GET") res.end('Sign up form')
                else if(req.method === 'POST') res.end('Sign up success!')
                break;
                
                    
            default:
                res.end('404 Not Found')
        }
    })

    

})

myServer.listen(8000,()=>{
    console.log(`Sever started at port: http://localhost:8000`)
})