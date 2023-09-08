let arr =[1,2,3,4,5];

console.log(arr.length);

let names = ["ruthvik","ram","ravi","raju"];

names.push('hari');

names.shift();
names.unshift('gopi');

let nn = names.join("*");

console.log(nn);

console.log(names[0]);


let string = names.toString();

console.log(string);


const text = "hello ";
const file = "world"

const rock = text.concat(file);

console.log(rock);

const text1 = ["dog","cat"];
const text2 = ["duck"];

console.log(text1.concat(text2));

const myArr = [[1,2],[3,0,4],[5,6]];

console.log(myArr.flat());

let res = [
    "ruthvik",
    "ram",
    "ravi",
    "raju",
    'rohit'
];

// console.log(res.splice(3,4,'hari'));
// console.log(res);

//console.log(res.sort());

console.log(res.reverse());