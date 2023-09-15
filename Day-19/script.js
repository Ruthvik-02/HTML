let allquotes = [
    {
        quote: "slow & steady wins the race",
        country: "india",
        name: "remesh",
        books: ["you can win"]
    },
    {
        quote: "do or die",
        country: "japan",
        name: "suresh",
        books: ["y fear when i am here"]
    },
    {
        quote: "make others happy",
        country: "india",
        name: "remesh",
        books: ["you can win"]
    }
];

let button = document.querySelector("button");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

button.addEventListener("click",()=>{
    let index = parseInt(Math.random()*allquote.length);
    h1.innerText = allquote[index];
    h2.innerText = allquote[index];
});