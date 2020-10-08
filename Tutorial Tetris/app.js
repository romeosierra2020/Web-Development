


let canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;
const FPS = 10;
let counter = 10;
let direction = 10;
canvas.setAttribute('style', 'margin: auto;');

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;



function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate);
        update();
    }, 1000 / FPS);
}

animate();


update();

function update() {

    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    ctx.beginPath();
    ctx.moveTo(10, 250);
    ctx.bezierCurveTo(10, 250, counter,100,270,250 );

    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();


//    ctx.beginPath();
//    ctx.moveTo(270, 250);
    ctx.bezierCurveTo(270,250, 530-counter,350,530,250 );

    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

//    ctx.beginPath();
//    ctx.moveTo(530, 250);
    ctx.bezierCurveTo(530, 250, counter+520,100,790,250 );
  
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    
    counter+=direction;
    if(counter > 260 || counter < 10){
        direction = -direction;
    }
}