// const math = require('./math')

// console.log(math)

// math.addFn(4,4)
// math.subFn(10,4)


const fs = require('fs')
const path = require('path')
// const url = require('url')

console.log(__dirname)

const filePath = path.join(__dirname,'test.txt')

console.log(path.extname(filePath))
console.log(path.basename(filePath))


console.log(filePath)

// fs.writeFile('test.txt','This is test text.',(err)=>{
//     if(err){
//         console.log('err',err)
//     }
//     console.log('File created.')

// })

// const relust = fs.writeFileSync('test.txt','This is test text 2.')
// console.log('1')

// fs.readFile(filePath,'utf8',(err,result) =>{
//     if(err){
//         console.log('err',err)
//         return;
//     }
//     console.log('data:',result)

// }
// )

// console.log(2)


// console.log('1')

// const result = fs.readFileSync('test.txt','utf8')
// console.log(result)

// console.log(2)


// fs.appendFile('test.txt','This is second text.\n',(err)=>{

//     if(err){
//         console.log("err",err)
//         return;
//     }

//     console.log("content added")

// })

// fs.unlink('test.txt',(err)=>{
//     console.log('file deleted')
// })