let canvas, context;
window.onload = function(){
    canvas = document.getElementById("mycanvas");
    context = canvas.getContext("2d");

    let img =  new Image();
    img.onload = function(){
        drawImage(img);

    }
    img.src = 'html5.png';


}

function drawImage(img){
    let destX = 10;
    let destY = 20;

    let destWidth = 470;
    let destHeight = 320;

    //drawimage(img,dx,dy,dw,dh)
    context.drawImage(img, destX,destY,destWidth,destHeight)
    console.log(img)


}
function showCanvasAsImage(){
    let dataurl = canvas.toDataURL();
    
    window.open(dataurl,'canvas as image', 'width=300','height=300')

}