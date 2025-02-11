// let userName:string = 'name'

// userName = ''

// let number:number = 10




// number = false


// let isActive:boolean = false
//  isActive = 'true'

// null 

// let  userName:null = null

// userName = ''

// any unknown

// let userName:any = 'John'

// userName = 10

// let userName:unknown = 'John'

// userName = 10


// array

// let stringArray: Array<string>

// stringArray = ['1','2']

// let numberArray:number[]

// let message:string = 'Hello'

// console.log(message);


// interface IUser {
//    readonly id: string
//     name:string;
//     age:number;
//     isStudent?:boolean
// }

// let user: Readonly<IUser> = {
//     id: '1',
//     name:'John',
//     age:10,
//     isStudent:false
// }

// let user2:IUser = {
//     id:'2',
//     name:'John',
//     age:10,
// }

// user2.name = "abc"
// user2.age = 20
// user2.id = '3'


// type

// type ID = string | number | boolean

// type IUser = {
//         name:string;
//         age:number;
//         isStudent?:boolean
// }

// let user2:IUser = {
//     name:'John',
//     age:10,
// }


// extends 

// interface IPerson {
//     name:string;
//     age:number;
// }


// interface IEmployee  extends IPerson {
//     employeeId:string
// }

// const employee1:IEmployee ={
//     name:'',
//     age:19,
//     employeeId:'1'
// }


// type IPerson = {
//     name:string;
//     age:number;
// }

// type IEmployee  =  IPerson & {
//     employeeId:string
// }


// const employee1:IEmployee ={
//     name:'',
//     age:19,
//     employeeId:'1'
// }


// type Gender = 'Male' | 'Female' | 'Other'


// interface IPerson {
//     name:string;
//     age:number;
//     gender:Gender
// }

// const person1:IPerson = {
//     name:'',
//     age:10,
//     gender:'Male'
// }


// function add (a:number,b:number):number{
//     // console.log(a + b)
//     return a + b
// }

// add(10,20)


// function wrapwitharray (value:string | string[]):string[]{
//     if(Array.isArray(value)){

//         return value   

//     }
//     return [value]


// }

// wrapwitharray('hello')


// function wrapwitharray<T>(value:T | T[]):T[]{
//     if(Array.isArray(value)){

//         return value   

//     }
//     return [value]


// }

// wrapwitharray<string>('hello')
// wrapwitharray<number>(1)



// tuples

// type ITuple = [string,number,boolean]

// let tuples:ITuple[]

// tuples = [['John',10 ,false ],['John',10 ,true]]


enum Role {
    Admin = 'Admin',
    Super_Admin = "Super Admin"

}


interface IPerson {
    name?:string;
    age?:number;
    role?:Role
}

const person:Required<IPerson> = {
    name:'',
    age:10,
    role:Role.Super_Admin
}















