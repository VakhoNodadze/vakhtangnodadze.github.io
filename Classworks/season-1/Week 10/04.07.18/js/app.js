// let user = {
//     name: "John",
//     age: 30
//    };
//    let key = prompt("What do you want to know about the user?", "name");
//    // access by variable
//    alert(user[key]); // John (if enter "name")

// let project ={
//     name: 'Laptop',
//     price: 1200,
// }
// alert(project.name);
// alert(project.price);
// project.price = 1000;
// alert(project.price);
// delete project.name;
// alert(project.name);


// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//    };
//    for (let key in user) {
//     // keys
//     alert(key); // name, age, isAdmin
//     // values for the keys
//     alert(user[key]); // John, 30, true
//    }


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
//    }

//    let sum = 0;
//    for(let key in salaries){
//        sum +=salaries[key];
//    }
//    alert(sum);

// let user = {
//     name: "John",
//     age: 30
//    };
//    let clone = Object.assign({}, user);
//    // now clone is a fully independent clone
//    clone.name = "David"; // changed the data in it
//    alert(user.name);
//    alert(clone.name);

// let calculator = {
//     read() {
//         this.a = +prompt("First value =");
//         this.b = +prompt("Second value =");
//     },
//     sum(){
//         return this.a + this.b;    
//     },
//     mul(){
//         return this.a * this.b;
//     }
// }
// calculator.read();
// alert( "Sum =" + calculator.sum() );
// alert( "Mul = " + calculator.mul() );


let ladder = {
    step: 0,
    up() {
    this.step++;
    return this;
    },
    down() {
    this.step--;
    return this;
    },
    showStep: function () { // shows the current step
    alert(this.step);
    return this;
    }
   };
   ladder.up().up().down().showStep(); // 1