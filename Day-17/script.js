// let div = document.querySelector("div");

// function addItem() {
//     let p = document.createElement("p");
//     let node = document.createTextNode("hello world");
//     p.appendChild(node);

//     div.appendChild(p);
// }

// let parent = document.body.children;

// console.log(parent);

let i=0;

function fun() {
    // setTimeout(()=> {
    setInterval(()=> {
        if(i==10) return;
        console.log("hii"+ i++);
    },1000);
}