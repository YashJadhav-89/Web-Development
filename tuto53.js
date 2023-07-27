console.log("this is tutorial 53");

function greet(name, greetText="Greetings from Javascript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy");
    
}

function sum(a,b,c){
    let d = a+b+c;
    return d;
    // this line will never execute (unreachable code)
    // console.log("Function is returned");
}
let name = "yash";
let name1 = "sumit";
let name2 = "mohit";
let name3 = "rohan";
let greetText1 = "Good Morning";


greet(name, greetText1);
greet(name1, greetText1);
greet(name2, greetText1);

//  let returnVal= greet(name3);
// console.log(returnVal);

let returnVal= sum(1,2,3);
 console.log(returnVal);
// console.log(name + " is a good boy");
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");