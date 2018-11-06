//#region Modernizr
/*
if(modernizr.canvas){
    //supported
}else{
    //bad
}
*/


window.onload = function(){
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');

    context.fillStyle = 'yellow';
    //fillRect(x, y, w, h) 
    context.strokeStyle = 'black';
    context.rect(0, 0, 200, 100);
    context.fill();
    context.stroke();
    
    // context.strokeStyle = 'red';
    // context.lineWidth = 10;

    // context.beginPath();

    // context.moveTo(150, 20);
    // context.lineTo(75,200);
    // context.lineTo(225, 200);
    // context.lineTo(150, 20);
    // // context.lineJoin = 'miter';
    // context.lineCap = 'round';

    // context.closePath();

    // context.stroke();

    // context.fillStyle = 'black';
    // context.fill();
}
