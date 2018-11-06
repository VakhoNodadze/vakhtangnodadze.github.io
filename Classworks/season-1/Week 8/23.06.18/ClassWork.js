// //let user = new Object();
//let user_2 = {};

// //JSON{}
// let user = {
//     name: "John",
//     age: 33
// }

// user_2.name = "User 2";
// user_2.age = 30;

// /*
//     {}
//     {               {
//         name,          name,
//         age            age
//     }               }
// */
//  user.isAdmin = true;
 
//  Object.defineProperty(user, "lastname", {
//      value : 'John',
//      writable : false,
//      configurable : false,
//      anumerable : false
//  });
 
//  Object.defineProperties(user_2,{
//      name : { value :"Test", writable : false},
//      lastname : { value : "lastname", writable : false},
//  })
//  console.log(user.lastname);
//  user.lastname = "smith";
//  console.log(user.lastname);
// console.log(user.name, user['age']);
// delete user.age;
// console.log(user.name, user['age']);
// //console.log(user)
// let key = prompt("Enter key", 'name');

// alert(user[key]);

/*
    value
    writeable : true
    enumarable : true
    configurable : true 
    ერთი property რაც გვაქვს,შედგება ამ ოთხი ქვეკატეგორიებიდან. defaultად აქვს ყველას true
*/

//Exercise 1

// let product = {};
// product.name = "Laptop";
// product.price = 1200;
// product.price = 1000;
// alert(product.name);
// alert(product.price);
// delete product.name;
// alert(product.name);


// let speed = 300;
// let color = "black";
// let year = 2018;

// let car = {
//     color,
//     year,
//     engine : 6.3
// }
// Object.defineProperty(car,'speed',{
//     value : speed,
//     enumerable : false
// })
// console.log(car);
// //console.log("engine" in car);

// for (let key in car){
//     console.log(`key ${key}, value : ${car[key]}`)
// }



//Exercise 2

// let salaries = {
//     John : 100,
//     Ann : 160,
//     Pete : 130
// }
// let sum = 0;
// for (let key in salaries) {
//   sum += salaries[key];
// }

//  alert(sum);

// let user = {};
// user.sayHi = function(){
//     alert("Hello");
// }
// user.sayHi();
// user['sayHi']();

// let userV2 = {
//     name : "javascript",
//     sayHi(){
//         let func = () => alert(this.name);
//         func();
//     },
//     test : () => {
//         alert(this.name);
//     }
// }
// userV2.sayHi();
// userV2.test();

//Exercise 3

// let calculator = {
//     read() {
//       this.a = +prompt('First value is = ');
//       this.b = +prompt('Second value is = ' );
//     },
//     sum() {
//       return this.a + this.b;
//     },
//     mul() {
//       return this.a * this.b;
//     }
//   };
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// //Exercise 4

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   }

//   ladder.up().up().down().showStep();



// function greet(){
//   alert(this.name);
// }
// function say(time, phrase){
//   alert(`[${time}] ${this.name} : ${phrase}`)
// }

// //call, apply
// let client = {name : "client"}
// let admin = {name : "admin"}

// greet.call(client);
// greet.call(client);
// say.call(john, `10:00`, 'Hello');



// let user = { name: "John" };
// let id = Symbol("id");

// user[id] = "ID Value";
// alert( user[id] ); 



// function User(name) {
//   this.name = name;
// }

// User.prototype.sayHi = function() {
//   alert(this.name);
// }

// let user = new User("John");
// user.sayHi();




//Exercise 5

// function Calculator()  {
//     this.read = function(){
//       this.a = +prompt('First value is = ');
//       this.b = +prompt('Second value is = ' );
//     }
//     this.sum = function() {
//       return this.a + this.b;
//     }
//     this.mul = function() {
//       return this.a * this.b;
//     }
//   }
  
//   let calculator = new Calculator();
//   calculator.read();
//   alert( 'Sum = ' +calculator.sum() );
//   alert( 'Multiple = ' +calculator.mul() );



//Exercise 6

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('How much You want to add', );
//   }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert('ToTal Accumulator = ' +accumulator.value);


//Exercise 7
function Calculator() {
    
  let methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2]

    return methods[op](a, b);
    
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}
let calc = new Calculator;

calc.addMethod("*", (a, b)=>a*b);
calc.addMethod("/", (a, b)=>a/b);
calc.addMethod("**", (a, b)=>a**b);

let result = calc.calculate("3 * 3");
alert( result );
let result1 = calc.calculate("3 / 3");
alert( result1 ); 
let result2 = calc.calculate("3 ** 3");
alert( result2 ); 
