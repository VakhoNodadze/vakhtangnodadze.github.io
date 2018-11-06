window.onload  = () => {
    let canvas = document.querySelector('#imageCanvas');
    let ctx = canvas.getContext('2d');

    generateImage();

    function generateImage(){
        let height = canvas.height;
        let width = canvas.width;

        let pixels = ctx.createImageData(width, height);
        let centreX = width / 2;
        let centreY = height / 2;

        let currentPixelPosition = 0;

        for(let y = 0; y < pixels.height; y++){
            for(let x = 0; x < pixels.width; x++){
                let xOffset = x - centreX;
                let yOffset = y - centreY;

                let d = Math.abs(xOffset) + Math.abs(yOffset);
                let t = Math.tan(d / 50);

                let red = t * 200;
                let green = 125 + t * 80;
                let blue = 255 + t * 50;

                pixels.data[currentPixelPosition++] = Math.max (0, Math.min(255, red));
                pixels.data[currentPixelPosition++] = Math.max (0, Math.min(255, green));
                pixels.data[currentPixelPosition++] = Math.max (0, Math.min(255, blue));
                pixels.data[currentPixelPosition++] = Math.random() * 1000;
            }
        }

        ctx.putImageData(pixels, 0, 0);
        
    }
}

