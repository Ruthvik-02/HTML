const url = 'https://api.api-ninjas.com/v1/dadjokes?limit=3';
let options ={
	method:'GET',
	headers : {
		'Content-Type': "application/json",
		'X-Api-Key': '2yNYsi9tYt6xBcBa67Xsfw==euKWXn0OnUHpBnqf',
	},
};
let heading = document.querySelector("h1");
let heading1 = document.querySelector("h2");
let heading2 = document.querySelector("h3");
async function getapi() {
   
    //cityname = city.value;
   // let url1 = "'https://api.thecatapi.com/v1/images/search?api_key=live_alUBjjzggdz8isnFpPZDT0T7iVTzH9SZC0UWpsSAqO29D8oWE2ScGu5SzOkOGUTk";
    let respon = await fetch(url,options);
    let weather = await respon.json();
    //image.src = weather.url;
    heading.innerText = weather[0].joke;
    heading1.innerText = weather[1].joke;
    heading2.innerText = weather[2].joke;
    console.log(weather[0]);
}