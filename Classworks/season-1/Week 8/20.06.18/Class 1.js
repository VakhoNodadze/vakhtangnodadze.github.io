// function defaultparams(x=8,y = 2){
//     return x *y;

// }

// console.log(defaultparams());
// let years =new Array(10);
// let years2 = [10]; // more popular

// console.log(years.length);
// years.length =5;
// console.log(years.length);

// console.log(".............");
// console.log(years2,length);
// years.length=17;
// console.log(years2.length);

// let fruits=["apple","banana","cherry",];
// console.log(fruits)
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// fruits[2] ="lemon";
// console.log(fruits)

// let arr=["apple",{name:"john"},true,()=>{alert("hi from array")}];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[1].name);
// console.log(arr[2]);
// arr[3]();

// let numbers =[];
// // push/pop
// numbers.push(1);
// numbers.push(8);
// numbers.push(15);
// numbers.push(20);
// console.log(numbers);
// let removed = numbers.pop();
// console.log(`removed:${removed}`);
// console.log(numbers);


// number.length=0;
// console.log(numbers);
// shift/unshift
// numbers.unshift(1)
// numbers.unshift(8)
// numbers.unshift(13)

// console.log(numbers);
// removed=numbers.shift();
// console.log(`removed:${removed}`);
// console.log(numbers);
//let n=numbers;
//console.log(n);
// console.log(n=== numbers)
//n.push(33);
// console.log(numbers);
// let clone= Object.assign({},numbers);
// console.log(clone)
// let clone= numbers.slice();
// clone.push(64);
//  console.log(clone);


// clone.age=11;
// numbers.age=13
//  console.log(clone)
// for (let index=0;index <numbers.length;index+=1){
//     console.log(numbers[index]);
// }
// for(number of numbers){
//     console.log(number);
// }
// for(number in numbers){
//     console.log(numbers[number])
// }
// console.log(numbers.toString());
// console.log(numbers.join("-"));
// console.log(numbers);

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

function sumInput(){
    let numbers = [];
    while(true){
        let value = prompt("Enter a number please");
        if(value === null || value == "" || !isFinite(value)){
            break;
        }
        numbers.push(+value);
    }
    let sum = 0;
    for(let number of numbers){
        sum += number;
    }
    return sum;
 }
 alert(sumInput() );