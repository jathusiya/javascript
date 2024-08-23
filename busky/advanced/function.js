function add(a,b){
    return a+b;
}

console.log(add(22,12));

//with arbitrary argument

function sum(){
    let total =0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum(32,10,21));

//function as expression
const add1 =function(a,b){
    return a+b;
}

console.log(add1);
console.log(add1(22,31));

//Arrow function
//const functioname = (parameters) =>{ function body};

const add2 =(a,b)=>{
return a+b;
}
console.log(add2)
console.log(add2(43,21));

//1.arrow function with map

let numbers=[1,2,3,4];
console.log(numbers);
let doubleNumbers=numbers.map(number=>number*2);
console.log(doubleNumbers);

//2.using arrow functions with filter()
let words = ['apple','banana','orange', 'grape'];
let filterWords = words.filter(word=>word.length>5);
console.log(filterWords);

//3.using arrow functions with reduce():
console.log(numbers);
let total=numbers.reduce((sum,number)=>sum+number,0);
console.log(total);

//4/using arrow functions to create a closure:
let createCounter =()=>{
    let count=0;
    return ()=>{
        count++;
        return count;
    }
};

let counter = createCounter();
console.log(counter);
counter.log(counter());