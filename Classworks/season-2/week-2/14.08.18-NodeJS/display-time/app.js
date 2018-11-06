let time = new Date();

let day = time.getDay();
let month = time.getMonth();
let year = time.getFullYear();
let hour = time.getHours();
let minute = time.getMinutes();


console.log(`${day}:${month+1}:${year} ${hour}:${minute}`);