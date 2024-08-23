function MyCallBack(){
    console.log("This is My callback function")
}

function higherOrderFunction(MyCallBack){
    MyCallBack();
}
higherOrderFunction(MyCallBack);

//setTimeout(function,1000)

setTimeout(function(){
    console.log("Hello World");
},3000);

setInterval(function(){
    console.log("Hello World jathu");
},3000);

const numbers=[1,2,3];
numbers.forEach(function(number){
    console.log(number);
});

