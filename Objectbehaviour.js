

let emp1={
id:1,
name:"Jeevan",
salary:29000,
desg:"Developer",
dept:["CSE","IT","CLOUD"],
greet:function(){
    console.log("welcome");
},

isMarried:false
};

//It will print only the keys...
let keyName=Object.keys(emp1);
console.log(keyName);



//It will print the only values..

let values=Object.values(emp1);
console.log(values);


//It will print both keys and values...
let arr=Object.entries(emp1);
console.log(arr);


//add

emp1.role="SOFTWARE";
emp1.isPresent=true;
console.log(emp1);


//Update...

emp1.id=432;
console.log(emp1);

//view 
console.log(emp1.role);
console.log(emp1["role"]);

//delete
delete emp1.dept;
delete emp1.greet;

//delete
console.log(emp1);








