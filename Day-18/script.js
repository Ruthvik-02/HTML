let h1 = document.querySelector('h1');

// function getTime() {
//     let date = new Date();
//     console.log(date);
// }

// function getDate() {
//     let date = new Date();
//     h1.innerText = date;
//     console.log(date);
// }

function getDate() {
    let date = new Date();
    let time = date.getHours+":"+date.getMinutes+":"+date.getSeconds;
    h1.innerText = time;
    console.log(time);
}