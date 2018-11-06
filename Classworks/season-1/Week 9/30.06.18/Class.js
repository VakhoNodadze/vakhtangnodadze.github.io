// let nums=[2,3,7,4,9,6,18,12];

// let users=[
//    {id:1,name:"bondo"},
//    {id:2, name:"bojack"},
//    {id:3, name:"todd"},
//    {id:4,name:"mave"},
//    {id:5,name:"kira"},
// ]
// function compare(a,b){
//    if(a>b) return 1;
//    if(a==b)return 0;
//    if(a<b) return -1;
// }
// // console.log(nums.sort(compare));// (a,b) => {return a-b;}))

// let foundUser= users.find(user=> user.id==2);
// let filtered =users.filter(user=>user.id<4);
// // console.log(filtered);
// // console.log(foundUser);

// let doubled = nums.map((number,index,arr)=>{
//    return number * 2;
// })
// // console.table(doubled);

// let html = users.map(user =>{
//     return`
//         <div class = "user">
//             <h2 class = "title"> ${user.name} <small>Id - ${user.id} </small></h2>
//             </div>
//     `
// });

// document.body.innerHTML = html.join("");
// console.table(html);

//Exercise 1

// function sortByName(arr) {
//   arr.sort((a, b) => a.name > b.name);
// }
// let john = { name: "John", age: 25 };
// let adam = { name: "Adam", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ john, adam, mary ];
// alert(arr[1].name);
// sortByName(arr);
// alert(arr[1].name);


//Exercise 2

// function unique(arr){
//     let result = [];
//     for(let test of arr){
//         if(!result.includes(test)){
//             result.push(test);
//         }
//     }
//     return result;
// }
// let values= ["John", "Mary", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];

// alert(unique(values));

// let mixedStr= ["John", "Mary", "Mary", "Harry", "Beth", "Harry", "Mary", "John"];

// let uniqueStr = mixedStr.filter( (value, index) => {
//     return mixedStr.indexOf(value) == index;
// })

// console.table(uniqueStr);

//Exercise 3

// let john = {name: "john", surname: "Smith", id: 1};
// let pete = {name: "Pete", surname: "Hunt", id: 2};
// let mary = {name: "Hary", surname: "key", id:3};

// let users = [john, pete, mary];

// let userMapped = users.map(
//  (obj) => {
//        return {fullname: `${obj.name} ${obj.surname}`,
//                 id: obj.id}
//      }
// );

// alert(userMapped[0].id)
// alert(userMapped[0].fullname)

//Exercise 4

// function unique(arr) {
//     return Array.from(new Set(arr));
//  }
//  let mixedStr=["john","harry","hary","harry","beth","harry","mary","john"];
//  console.log(unique(mixedStr));

//Exercise 5

// function subArrayZero(arr){
//     let sum = 0;
//     let mySet = new Set();

//     for(let num of arr){
//         sum += num;
//         if(mySet.has(sum)){
//             return true;
//         }
//         mySet.add(sum);
//     }
//     return false;
// }
// let nums = [-5,5,10,20,-10];
// console.log(subArrayZero(nums));

// let now = new Date();
// console.log(now);

// //UTC
// //1970 1 JAN
// let start = new Date(0);
// console.log(start);

//Exercise 6

// function getSecondsToTomorrow() {

//     let now = new Date();
//     let hour = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
//     let time = (hour*60+minutes)*60 + seconds;
//     let wholetime = 86400;

//     return wholetime - time;
//   }
// console.log(getSecondsToTomorrow());

// let myMap = new Map();

// myMap.set(1, "one");
// myMap.set(2, "Two");
// myMap.set(false, 0);
// myMap.set(true, 1);
// myMap.set({name: "John"}, "User");

// for(let key of myMap.keys()){
//     //console.log(key);
// }

// for(let value of myMap.values()){
//     //console.log(value);
// }
// for(let [key, value] of myMap.entries()){
//     console.log(key,value);
// }

// let prices = new Map([
//     ["banana", 5],
//     ["apple", 4],
//     ["kiwi", 8],
// ]);

function countWords(Sentence){
    let totalNumber =0;
    for (let i = 0; i <sentence.length; i++){
        if(sentence(i) === " "){
            totalNumber +=1;
        }
        totalNumber +=1;
    }
}

let sentence = "John the second is the son of John the first, while the second son of John the second is Wlliam the Second";
countWords(sentence);
console.log(countWords);