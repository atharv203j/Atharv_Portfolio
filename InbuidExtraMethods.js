

//Normal

add(10,20); //Function Hoisting...

function add(a,b){
    console.log("Add of :",a+b);
    
}

//Arrow
/*
add1(20,30)

var add1=(a,b)=>{
    console.log("add of :",a+b);
    
}

*/

//fue..

/*
add2(20,30)

var add2=function(a,b){
    console.log("Add of : ",a+b);
    
}
    */


//Function Hoisting is  only Applicable for Normal Function...


let cart=[{

    id:1,
    name:"bike",
    price:89990,
},
{
id:2,

name:"Laptop",
price:40000,

},

{
    id:3,
    name:"phone",
    price:3000,
},

];


let cart1=cart.forEach((i)=>{

    console.log(i.name+":",i.price+100);
    return i;//undefined...
    
});

for(let i=0;i<cart.length;i++){
    console.log(cart[i].name+":"+cart[i].price);
    return cart[i].name;
}

let cart1=cart.forEach((i)=>{

return i;
});

