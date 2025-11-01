

function print(a,b){
    console.log("Hello welcome to new topic..");
    c=a+b;
    console.log(c);
    return c;

}

print(20);//Nan
print(20,30);//50

let num=print(30,"40");//3040
console.log(typeof(num));//String