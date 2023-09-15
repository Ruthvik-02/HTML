let heading = document.createElement("h1");

let img = document.getElementsByTagName("img")[0];
let bton = document.getElementsByTagName("button")[0];

let i=0;

function fun() {
    if(i%2 == 0) {
        img.setAttribute("scr","b-bulb-on.png");
        bton.innerText = 'OFF';
    }
    else {
        img.setAttribute("scr","b-bulb.png");
        bton.innerText = 'ON';
    }
    i++;
}

heading.innerText = "hiii";
document.body.appendChild(heading);