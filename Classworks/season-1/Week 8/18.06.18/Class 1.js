//window.inload
//DOMContentLoaded

// function initialize(){
//     alert('DomContentLoaded');
//     let box = document.querySelector('.box');
//     box.style.backgroundColor = ('red');
// }

// document.addEventListener('DOMContentLoaded', initialize);
// window.onload = function(){
//     alert('window onload');
// }
// getName();
// function getName(){
//    alert("Name");
// }

// let getNameV2 = function(){
//    alert("Name2");
// }
// getNameV2();


// function showMessage(from, text){
//    from =  `* ${from} *`;
//    alert(`${from}: ${from}`)
// }
// let from ="john"
// showMessage(from,'hello');
// alert(from); //=>john;


// function sum(x,y){
//     return x + y;
// }

// function CheckMovie(age){
//     if(age < 18) return;

//     alert("Access Granted!...");
// }
// CheckMovie();
// alert(result);

// let x = Number(prompt("Enter x"));
// let n = Number(prompt("Enter n"));
// function pow(x,n){
//     if(n%1==0 && n >=1){
//         return x**n;
// }
// }
// alert(pow(x,n));


let num = Number(prompt("Enter a number"));
function isPrime(num){
    let prime = true;
    for(let i = 2; i < num; i++){
        if(num % i==0){
            prime = false;
            break;
        }
    }
    return prime;  
}
//alert(isPrime(num));
function showPrimes(num){
        for(let i = 1; i < num; i++){
            if(isPrime(i)){
                console.log(i);
            }
        }
}
showPrimes(num);