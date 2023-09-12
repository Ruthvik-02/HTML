// heading = document.createElement("h1");

let imag = document.getElementsByTagName("img")[0];
let bton = document.getElementsByTagName("button")[0];

let i=0;

// function fun1() {
//     if(i%2 == 0) {
//         imag.setAttribute("scr","b-bulb-on.png");
//         bton.innerText = 'OFF';
//     }
//     else {
//         imag.setAttribute("scr","b-bulb.png");
//         bton.innerText = 'ON';
//     }
//     i++;
// }

function fun() {
    let heading = document.createElement("h1");
    heading.innerText = "hiii";
    document.body.appendChild(heading);

    let image = document.createElement("img");
    image.src = "light-bulb-on.gif";
    document.body.appendChild(image);
}