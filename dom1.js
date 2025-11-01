let a=document.createElement("hi");
console.log(a);
a.innerText="welcome to html";

let image=document.createElement("img");
console.log(image);
image.setAttribute("src","https://tse1.mm.bing.net/th/id/OIP.Y0mtQVqiHS0srGGg3jMdBwHaJb?pid=Api&P=0&h=180");
image.setAttribute("height","100");
image.setAttribute("width","100");

let root=document.getElementById("root");
console.log(root);
root.appendChild(image);
root.appendChild(a);


