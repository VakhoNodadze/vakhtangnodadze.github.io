$(document).ready(function () {
    $.get("https://jsonplaceholder.typicode.com/users", function(data) {
        console.log(data)
    }) ;
});