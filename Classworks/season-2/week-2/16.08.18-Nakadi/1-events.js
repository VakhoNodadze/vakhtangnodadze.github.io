const Eventmitter = require ( 'events').EventEmitter;
const chalk = require ('chalk');

const getResource = ( c) => {
    let e = new Eventmitter();
    process.nextTick ( ( ) => {
        let count = 0;
        e.emit('start');
        let t = setInterval( () => {
            e.emit('data', ++count);

            if( count == c){
                e.emit('end', count);
                clearInterval(t);
            }
        }, 10)
    })

    return e;
}

let res = getResource(8);
res.on('start', () => {
    console.log(chalk.green( '-- Srated --'));
})

res.on('data', (num) => {
    console.log(chalk.yellow (`Current Number - ${num}`))
})

res.on('end', (num) => {
    console.log(chalk.red(`Doe, last Number - ${num}`))
})