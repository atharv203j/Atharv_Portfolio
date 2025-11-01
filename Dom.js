let heading1=document.getElementById("root");
console.log(heading1);
heading1.innerText="Welcome to Javascript";

heading1.style.color="blue";
heading1.style.backgroundColor="yellow";

let image1=document.getElementById("image");
console.log(image1);

image1.src="https://tse2.mm.bing.net/th/id/OIP.E4XnT8CJvaZQy_w8Wdsf9gHaKx?pid=Api&P=0&h=180";
image1.height="100";
image1.width="100";


let h2=document.getElementsByClassName("dora");
console.log(h2);

h2[0].innerText="I am dora id";
h2[1].innerText="I am a dora class";
h2[2].src="https://tse1.mm.bing.net/th/id/OIP.Y0mtQVqiHS0srGGg3jMdBwHaJb?pid=Api&P=0&h=180 ";
h2[2].style.height="100px";
h2[0].style.color="blue";

let para=document.getElementsByTagName("p");
console.log(para);

para[0].textContent="I am a first para";
para[1].textContent="I am a second para";
para[2].textContent="I am a third para";

let rambo=document.getElementsByName("rambo");
console.log(rambo);


rambo[0].innerText="welcome to Html";
rambo[1].innerText="Hii Javascript";

let root=document.querySelector("#root");
console.log(root);

root.textContent="I am a kid";

let dora=document.querySelectorAll(".dora");
console.log(dora);
dora[0].textContent="I am a first Element";
dora[1].textContent="https://tse1.mm.bing.net/th/id/OIP.Y0mtQVqiHS0srGGg3jMdBwHaJb?pid=Api&P=0&h=180";
dora[1].style.height="100px";
dora[1].style.width="100px";
dora[2].textContent="I am first Element";

let para=document.querySelector("p");
    console.log(para);
    para.textContent="welcome to paragraph";
    









