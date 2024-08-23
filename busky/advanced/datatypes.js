// Data Type in Js
// JS dynamic programming

// primitive datatype
/*
number 1.2, 8
Boolean true, false
String
null
undefined
symbols

*/

// Reference Type
/*
Array
Object
Date
*/

var a =27;
var fname ="Jathu";
var isMarried =true;
var phone = null;
let b; //undefined
console.log(typeof(a))

const s2= Symbol()
console.log(s2)

var courses =["java","python","c++"]

//TypeConversation

//number to String
let x;
x=90;
console.log(x, typeof x); //nubmer
x= String(x)
console.log(x, typeof x);// convert String


x=90;
console.log(x, typeof x); //nubmer
x= x.toString()
console.log(x, typeof x);// convert String

//String to number
//parseInt,parseFloat


//Type coercion
let y ="24"
let z= 10;
console.log(y+z); //2410

y=Number(y);
console.log(y+z); //34
