// primitive
//
// 7 types : STRING, NUMBER,NULL,BOOLEAN,UNDERDEFINED,SYMBOL,BIGINT

// Javascript is dynamically typed
 const score = 100
 const scorevalue = 100.3
 const outsidetemp =null
 const isloggedin =false
 let useremail;

 const id = Symbol('123')
 const anotherid = Symbol('123')
 console.log(id === anotherid);
 const bignumber = 1920193018301830183n

// Refrence(Non-Primitive): ARRAY, OBJECTS, FUNCTIONS
 
const heros = [ "shaktiman" ," nagraj" ,"doga"]
let myObj = {
    namerto: "radhe",
    age:23,
}

const myfunction = function(){
    console.log("helloworld");
    
}
console.log(typeof bignumber);
console.log(typeof myObj);
