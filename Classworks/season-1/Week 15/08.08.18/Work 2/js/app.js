//PRCE, *POSIX

// \n \t \r \v
//delimiters -> / /im
// /abc/

// ? --0ჯერ ან 1ხელ მაინც
// * ---0ხელ მაინც ან მეტჯერ 
// + --1ხელ ან მეტჯერ


// let myStr = `Product-1 $13
//             Product-2 $27
//             Product-3 #112`;

// let myRe = /[$0-9]+/g;
// // let result = myRe.exec(myStr);
// let rex = myStr.match(myRe);
// console.log(rex);

// window.onload = () => {
//     let text = document.querySelector('#text');
//     let count = document.querySelector('#count');
//     let result = document.querySelector('#result');

//     count.addEventListener('click', (event) => {
//         let str = text.value;
//         str = str.replace(/[A-Za-z]/g, '').toLowerCase().split('');
//         console.log(str);

//         str.array.forEach(element => {
//             if(count0b[element]){
//                 count0b[element] +=1;
//             }
//             else{
//                 count0b[element] = 1;
//             }
//         });
//         for(let prop in str){
//             result.innerHTML =+ `<tr>
//                                 <td>${prop}</td>
//                                 <td>${count0b[prop]}</td>
//                                 </tr>`
//         }
//     })
// }


let PubSub = (function(){
    let events = {};
    return {
        subscribe(event, callBack){
            if( !events[event] ){
                events[event] = {
                    queue: []
                }
                let index = events[event].queue.push(callBack) - 1;
                return(function(){
                    return{
                        remove(){
                            delete events[event].queue[index];
                        }
                    }   
                })(event, index);
            }
        },
        publish(event, detail){
            if( !events[event] || !events[event].queue.length) return;

            let callBack = events[event].queue;
            for(let i = 0, ln = callBack.length; i < ln; i++){
                if( typeof callBack[i] === 'function') {
                    callBack[i](detail || {});
                }
            }
        }
    }
})()