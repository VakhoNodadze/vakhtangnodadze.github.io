window.onload = function () {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext("2d");

    // getImageData(x,y,width,height)
    // createImageData(width,height)
    // putImageData(imgData ,dx,dy,x,y,width,height) 
    let img = new Image();
    img.onload = function () {
        // ctx.drawImage(img,
        //     (canvas.width / 2) - (img.width / 4),
        //     (canvas.height / 2) - (img.height / 4), 300, 300);
        ctx.drawImage(img,0,0,300,300)
        grayScale()
    }
    img.src = 'images/html5.png';

    function grayScale(){
        let pixels = ctx.getImageData(0, 0, canvas.width, canvas.height)
        let data = pixels.data

        for(let i = 0; i < data.length; i += 4){
            const grey = data[i] * .3 + data[i + 2] * .59 + data[i + 2] * .11
            data[i] = grey
            data[i + 1] = grey
            data[i + 2] = grey
        }
        ctx.putImageData(pixels, 0, 0)
    }

}