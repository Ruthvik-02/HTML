//let cityname = "chennai";
//let city = document.getElementsByTagName('input')[0];
// let btn = document.querySelector('button');
// btn.addEventListener('click',getapi);
//let url1 = "https://api.thecatapi.com/v1/images/search?api_key=live_alUBjjzggdz8isnFpPZDT0T7iVTzH9SZC0UWpsSAqO29D8oWE2ScGu5SzOkOGUTk";

let url1 = "https://random.dog/woof.json";
let image = document.querySelector("img");
async function getapi() {
   
    //cityname = city.value;
   // let url1 = "'https://api.thecatapi.com/v1/images/search?api_key=live_alUBjjzggdz8isnFpPZDT0T7iVTzH9SZC0UWpsSAqO29D8oWE2ScGu5SzOkOGUTk";
    let respon = await fetch(url1);
    let weather = await respon.json();
    image.src = weather.url;
}