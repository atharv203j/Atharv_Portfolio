

//anonymous Function 
/*
function(a,b){

    console.log(a+b);
    return a+b;

}*/

//Fuction with Expression
// let add=function(a,b){
//     console.log(a*b);
//     return a+b;
// }

// console.log(add);
// console.log(typeof(add));


//Immediately Invoked Fuction...

(function(a,b){
    console.log(a+b);
}

)(2,3);


//Callback Function-The processing of passing the fuction as a argument to another fuction..

function add(c,d){

    return c+d;
}

function mul(x,y){
    return x*y;
}

//Higher order Function....

function operate(funName,val1,val2){
    return funName(val1,val2);
      // It will not work// return add(20,30);
}

let total=operate(add,20,30);
console.log(total);



//Arraw Function....



console.log("First Line Executed...");
setTimeout(()=>{

    console.log("second line is Executed...");
    console.log("Third Line is Executed...");


},5000)
console.log("Fourth line is Executed....");
console.log("FifthLine is Executed...");


console.log("FirstLine is Executed..");


console.log("---------------------------------");
setInterval(()=>{

    console.log("SecondLine is Executed..");
    console.log("ThirdLine is Executed...");


},2000)

console.log("FourthLine is Executed..");
    console.log("FifthLine is Executed...");

