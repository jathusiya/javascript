/*array.reduce(function(accumulator, currentValue,currentIndex,array){
}.initialValue);*/

// let numbers = [1,2,3,4,7];
// let sum =numbers.reduce((accumulator,currentValue)=>accumulator+currentValue);
// console.log(sum);

//flattening an array
let nestedArray =[[1,2],[3,4],[7,8]];
console.log(nestedArray);
let flattenedArray = nestedArray.reduce((accumulator,currentValue)=>accumulator.concat(currentValue));
console.log(flattenedArray);


let colors=['red','blue','green','red','blue','yellow'];
let colorCounts = colors.reduce((accumulator,currentValue)=>{
    if (currentValue in accumulator){
        accumulator[currentValue]++;
    }else{
        accumulator[currentValue]=1;
    }
    return accumulator;
},{});

console.log(colorCounts);

let numbers=[4,10,18,20,32];
let largest= numbers.reduce((accumulator,currentValue)=>{
    return Math.max(accumulator,currentValue);
})
console.log(largest)

let people = [
    {name:'Mala', age:20 ,city:'chava'},
    {name:'Sasi', age:27 ,city:'jaffna'},
    {name:'Logu', age:34 ,city:'jaffna'},
];

let groupByCity = people.reduce((accumulator,currentValue)=>{
    if(currentValue.city in accumulator){
        accumulator[currentValue.city].push(currentValue);
    }else{
        accumulator[currentValue.city]=[currentValue];
    }
    return accumulator;
},{});
console.log(groupByCity);