const mathFun = require('./mathFun');

let proceessResults = (err, result, time) => {
    if( err){
        console.log(`Error. ${ err.message}`);
    }else{
        console.log( `Result is - ${result}, time - ${time}`);
    }
}

for( let i = 0; i< 10; i++){
    console.log(`Calling EventDoubler`, i);
    mathFun.evenDoubler(i, proceessResults);
}

console.log(`mathFun.maxTime ${mathFun.maxTime}`);