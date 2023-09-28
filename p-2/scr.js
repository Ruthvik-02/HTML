let url = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=7cd4fcc9a590bd0cbacf61393ff695dc";
//let url1 = "https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=7cd4fcc9a590bd0cbacf61393ff695dc";


let cityname = "chennai";
let city = document.getElementsByTagName('input')[0];
// let btn = document.querySelector('button');
// btn.addEventListener('click',getapi);

async function getapi() {
   
    cityname = city.value;
    let url1 = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=7cd4fcc9a590bd0cbacf61393ff695dc`;
    let respon = await fetch(url1);
    let weather = await respon.json();
    console.log(weather);

}
