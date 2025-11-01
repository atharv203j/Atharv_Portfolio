
let userInfo=[];

function addInfo(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let dob=document.getElementById("date").value;
    let password=document.getElementById("password").value;
    let profile=document.getElementById("img");

    let user=(name,phone,email,dob,password,profile);

    userInfo.push(user);
    console.log(userInfo);
    


}