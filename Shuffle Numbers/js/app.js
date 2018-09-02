// let name = document.querySelector('#name');
// let surname = document.querySelector('#surname');
// let age = document.querySelector('#age');
// let form = document.querySelector('#form');

// let userInfo = document.querySelector('.userInfo');

// form.addEventListener('submit', function(event){
//     userInfo.innerHTML += `<div class = "name2"> Name: </div>` + name.value;
//     userInfo.innerHTML += `<div class = "name2"> Name: </div>` + surname.value;
//     userInfo.innerHTML += `<div class = "name2"> Name: </div>` + age.value;

//     event.preventDefault();
// },false)


let storage = document.querySelector('.storage');
let ascend = document.querySelector('.ascend');
let descend = document.querySelector('.descend');
let shuffle = document.querySelector('.shuffle');
let numbersArray = [];
for(let i = 1; i<= 150; i++){
    numbersArray.push(i);
}

function showHTML(array){
    array.forEach(element => {
        let createSpan = document.createElement('span');
        // createSpan.style.borderRadius = '10px';
        createSpan.style.backgroundColor = '#B4B4C6';
        createSpan.style.cursor = 'pointer';
        createSpan.textContent = ' ' + element;
        storage.appendChild(createSpan);
        createSpan.addEventListener('click', deleteNumbers);
    });
}
showHTML(numbersArray);

function ascendNumbers(){
    numbersArray = numbersArray.sort((a,b) => a - b);
    storage.innerHTML = '';
    showHTML(numbersArray);
}

function descendNumbers(){
    // debugger;
    numbersArray = numbersArray.sort((a,b) => b - a);
    storage.innerHTML = '';
    showHTML(numbersArray);
    // debugger;
}
// debugger; 
function shuffleNumbers(){
    // debugger;
    let elements = numbersArray.length;
    let temp, index;
    while(elements > 0){
        index = Math.floor(Math.random() * elements);
        elements--;
        temp = numbersArray[elements];
        numbersArray[elements] = numbersArray[index];
        numbersArray[index] = temp;
    }
    // debugger;
    storage.innerHTML = '';
    showHTML(numbersArray);
}

function deleteNumbers(num){
    let index = parseInt(num.target.textContent);
    numbersArray[index-1] = '';
    storage.innerHTML = '';
    showHTML(numbersArray);
}

descend.addEventListener('click' , descendNumbers);
ascend.addEventListener('click', ascendNumbers);
shuffle.addEventListener('click', shuffleNumbers);


// for(let i = 1; i <= 150; i++){
//     let numbers = document.querySelector('.numbers');
//     let createSpan = document.createElement('span');
//     createSpan.style.borderRadius = '5px';
//     createSpan.style.backgroundColor = '#B5BD36';
//     createSpan.textContent = ' ' + i;
//     numbers.appendChild(createSpan);
// }


