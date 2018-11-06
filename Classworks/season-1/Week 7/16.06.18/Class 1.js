/*Class Work 1*/

// let year = prompt("Enter a year");

// if(year % 4 == 0 &&  ( !(year % 100 != 0 || year % 400 == 0))){
//     alert("This is leap year");
// }
// else{
//     alert("This year isn't leap year");
// }


/*Class Work 2*/

// let browser = prompt("Enter a browser:1)Edge 2)Chrome 3)Firefox 4)Opera 5)Other");

// if(browser == "Edge"){
//     alert("You've got the Edge");
// }
// else if(browser == "Chrome" || browser == "Firefox" || browser == "Opera"){
//     alert("kay we support these browsers too");
// }
// else{
//     alert("We hope that this page looks ok!");
// }


/*Class Work 3*/

// let number = prompt("Enter first number");
// let number2 = prompt("Enter second number");
// let operation = prompt("Enter which operation you want to do");

// switch(operation){
//     case "+":
//     alert(Number(number) + Number(number2));
//     break;
//     case "-":
//     alert(Number(number) - Number(number2));
//     break;
//     case "*":
//     alert(Number(number) * Number(number2));
//     case "/":
//     alert(Number(number) / Number(number2));
// }


// Class Work 4


// let number = prompt("Enter number");
// while(isNaN(number)){
//     alert("This input isn't a number, try again");
//     let number = prompt("Enter number");
// }


// Class Work 5

// let number = Number(prompt("Enter number"));
// let sum=0;
// while(number){
//     sum += number % 10;
//     number = Math.floor(number/10);
//     debugger
// }
// alert(sum);

//Class Work 6

// let min = Number(prompt("Enter minimal number"));
// let max = Number(prompt("Enter maximal number"));
// if(min > max){
//     let temp;
//     temp = max;
//     max = min;
//     min = temp;
// }
// for(let i = min; i <= max; i++){
//     if(i % 2 != 0){
//         continue;
//     }
//     alert(i);
// }

// console.log("Speed: " + speed + "km")
// console.log(`Speed: ${speed} km`)

//Class Work 7
let num = Number(prompt("Enter a number"));
let sum = " ";
for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
        sum += "*";
    }
    console.log(sum);
    sum = "";
    console.log('\n');
}