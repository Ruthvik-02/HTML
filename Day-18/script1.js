// console.log("line 1");

// function fun() {
//     console.log("line 2");
//     setTimeout(()=> {
//     },1000);
// }
// console.log("line 3");

function fun() {
    console.log("line 1");   
}

function fun1() {
    console.log("line 2");
    setTimeout(()=> {
    },1000);
}

function fun2() {
    console.log("line 3");   
}

fun();
fun1();
fun2();
