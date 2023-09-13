// function addItem() {
//     let input = document.getElementsByTagName("input")[0];
//     let ol = document.getElementsByTagName("ol")[0];

//     let li = document.createElement("li");
//     li.innerText =input.value;
//     li.setAttribute("onclick","remove()");
//     ol.appendChild(li);
//     input.value = "";
// }


let input = document.querySelector("input");

let Items =[];

function addItem() {
    let value = input.value;
    Items.push(value);
    displayItems();
}

function displayItems() {
    let ul = document.querySelector("ol");
    ul.innerHTML ="";
    Items.forEach((item)=> {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    })
}