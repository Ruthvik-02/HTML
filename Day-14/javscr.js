let heading1 = document.getElementsByTagName("h1");

//console.log(heading1[0]);


//heading1[1].innerText="web";//1=world
//console.log(heading1[1].innerText);


let i=1;

// function change() {
//     if (i%2==0) {
//         heading1[1].innerText="web";
//     }
// }

function change() {
    if (i%2==0) {
        heading1[0].innerText="Hello"+ i;
        heading1[0].style.backgroundColor = "blue";
        heading1[0].style.textAlign = "center";
    }
    else{
        heading1[1].innerText="hello"+ i;
        heading1[1].style.backgroundColor = "red";
        heading1[1].style.textAlign = "left";
    }
    i++;
}
