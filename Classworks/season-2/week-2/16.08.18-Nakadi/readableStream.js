const request = require('request');
const chalk = require('chalk');

let req = request('http://techub.ge');

req.on('data', (resp) => {
    console.log(`Data - ${resp}`);
})

req.on('end', () => {
    console.log(chalk.yellow (`request end`));
})