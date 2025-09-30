// object , array, tuple, enum

console.log("started");
// Object
// const person :{
//     name:String;
//     age:number;
//     x:{
//         ar:String
//     }
// } ={
//     name: "arif",
//     age:23,
//     x :{
//         ar : "ariful"
//     }
// }
// console.log(person)

// Array

// const person: {
//   name: string;
//   age: number;
//   skills: string[];
// } = {
//   name: "arif",
//   age: 23,
//   skills: ["react", "wordpress"],
// };

// let favLan: any[]; // loose ts feature
// favLan = ["arif", 345, true];
// console.log(person);

// Tuple
const person:{
    name:string;
    age:number;
    skills: string[];
    product:[number,string]

} ={
    name:"arif",
    age:23,
    skills:["wordpress","js"],
    product:[10,"m-2"]
}


// Enum
enum Role {ADMIN,AUTHOR}
const person2 ={
    name:"arif",
    age:21,
    skills:['aa',12],
    product:[12,"mac"],
    role: Role.AUTHOR
}

if(person2.role === Role.ADMIN){
    console.log('au')
}
if(person2.role === Role.AUTHOR){
    console.log('admin')
}