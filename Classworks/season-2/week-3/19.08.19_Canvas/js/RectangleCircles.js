window.onload = function(){
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");
    
    const scores = [100,40,51,78,88,54];

    const width = 50;
    let currentx = 0;
    let base = 200;


    // scores.forEach((el, index) => {
    //     let h = el;
    //     let y = canvas.height - h;
    //     ctx.fillStyle = 'seagreen';
    //     ctx.fillRect(currentx, y, width, el);
    //     currentx += width +10;
        
    //     ctx.fillStyle = 'black ';

    //     ctx.beginPath();
    //     //arc(x, y, radius, endAnge, clockWise);
    //     ctx.arc(currentx - width + 15, y, 15, 0, 2 * Math.PI, false);
    //     ctx.fill();
    //     ctx.strokeStyle = 'white';
    //     ctx.lineWidth = 2;
    //     ctx.stroke();

    //     currentx += width;
    // })
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;

    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(50, 500, 700, 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(50, 300, 700, 50);
    ctx.stroke();

    ctx.font = '50px Arial';
    ctx.fillText('Just do it', 120, 100);

    roundedRect(ctx, 100, 20, 200, 200, 20);
}

function roundedRect(ctx, x, y, width, height, radius){
    ctx.begiPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + radius);

    ctx.lineTo(x + width - radius, y + radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);

    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = 'seagreen';
    ctx.fill();
}
