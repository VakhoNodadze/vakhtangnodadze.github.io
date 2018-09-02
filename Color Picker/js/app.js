let firstRow, secondRow, thirdRow, final
firstRow = document.querySelector('.one')
secondRow = document.querySelector('two')
thirdRow = document.querySelector('.three')
final = document.querySelector('.final')

let changeColor = function (event){
    let click = event.target
    let color = click.style.backgroundColor
    if(click.parentNode.className == 'one'){
        final.children[0].style.backgroundColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color')
    }else if(click.parentNode.className == 'two'){
        final.children[1].style.backgroundColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color')
    }else{
        final.children[2].style.backgroundColor = window.getComputedStyle(event.target, null).getPropertyValue('background-color')
    }
}
    

let allElements = document.querySelectorAll('.clickable')
Array.from(allElements).forEach( function (element){
    element.addEventListener('click', changeColor)
})
// let div1, div2, div3;
// div1 = document.querySelector("#result1");
// div2 = document.querySelector("#result2");
// div3 = document.querySelector("#result3");
// function takeColors (event){
//     // debugger
//     let child = event.target;
//     let color = child.style.backgroundColor;
//     if (child.parentNode.className == "first"){
//         let result = document.querySelector(".result1")
//         result.style.backgroundColor = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
//     }
//     else if (child.parentNode.className == "second"){
//         let result = document.querySelector(".result2")
//         result.style.backgroundColor = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
//     }
//     else {
//         let result = document.querySelector(".result3")
//         result.style.backgroundColor = window.getComputedStyle(event.target, null).getPropertyValue("background-color");
//     }
// }

// let divs = document.querySelectorAll(".clickable");
// Array.from(divs).forEach(function (element){
//     element.addEventListener("click", takeColors)
// }) 