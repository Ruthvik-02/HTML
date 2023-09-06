let student = {
    name: "Ruthvik",
    id: 2000,
    age: 23,
    address: "Chikkaballpur",
    lang : ["java" , "sql" , "python"],
    sayhello: function(a) {
        console.log("hello"+a);
    },
    
    marks: {
        java: 60,
        sql: 49,
        python:68,
        printmarks : function(){
            console.log(this.python);
            console.log(this.sql);
            console.log(student.address);
        },
        distances: {
            bangalore:60,
            kolar:50,
            printDistances: function () {
                console.log(this.bangalore);
                console.log(this.kolar);
                console.log(student.marks.java);
                console.log(student.age);
            }
        }
    }

    
};
student.sayhello(7)
// console.log(student.marks.printmarks);
// student.marks.printmarks();
// let res = student.marks.distances.printDistances();
// console.log(res);
student.marks.distances.printDistances();
