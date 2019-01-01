let changeColors = function (){
    let random = Math.floor(Math.random() * 20)
    let divs = document.querySelectorAll('#wrapper div')

    // divs.forEach( function (element) {
    //     if(element.id == random){
    //         console.log(element.id)
    //         element.style.backgroundColor = 'blue'
    //     }

    // })
    divs.forEach( element => {
        if(element.id == random && element.style.backgroundColor == ''){
            console.log(element.id)
            element.style.backgroundColor = 'blue'
        }else if(element.id == random && element.style.backgroundColor == 'blue'){
            console.log(`${element.id} daemtxva`)
            element.style.backgroundColor = 'red'
        }else if(element.id == random  && element.style.backgroundColor == 'red'){
            console.log(`${element.id} daemtxva MEORED`)
            element.style.backgroundColor = '';
        }
    })
}
let btn = document.querySelector('#btn')
btn.addEventListener('click', changeColors)