let canvas = document.getElementById("game-screen");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const GAME_WIDTH = canvas.width;
const GAME_HEIGHT = canvas.height;
let lastTime = 0;
let number = 2;
let ctx = canvas.getContext("2d");
const FPS = 100;
const FACTOR = 1.02;
let ox,oy, dx, dy;
const XYRATIO = GAME_HEIGHT/GAME_WIDTH;


function update() {
/*
        ctx.beginPath();
        ctx.moveTo(75, 50);
        ctx.lineTo(175, 50);
        ctx.lineTo(200, 75);
        ctx.lineTo(175, 100);
        ctx.lineTo(75, 100);
        ctx.lineTo(50, 75);
        ctx.closePath();
        ctx.fillStyle = "rgb(200,0,0)";
        ctx.stroke();
        console.log("update");
*/

    ctx.beginPath(Math.floor((GAME_WIDTH+number)/2),Math.floor((GAME_HEIGHT+number*XYRATIO)/2))
    ctx.arc(Math.floor(GAME_WIDTH/2),Math.floor(GAME_HEIGHT/2),Math.floor(number/2),0,2*Math.PI,false);
    ctx.lineWidth = Math.ceil(number/50)+1;
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();


    number *=FACTOR;
    if (number > GAME_WIDTH){
        number = 2;

    }
    // draw square


        // draw diagonals
/*
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(GAME_WIDTH,GAME_HEIGHT);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0,GAME_HEIGHT);
        ctx.lineTo(GAME_WIDTH,0);
        ctx.stroke();
*/

 //   ctx.strokeRect((GAME_WIDTH-Math.floor(number))/2, ((GAME_HEIGHT-(number*XYRATIO))/2), number, XYRATIO * number);
    ctx.beginPath(Math.floor((GAME_WIDTH+number)/2),Math.floor((GAME_HEIGHT+number*XYRATIO)/2))
    ctx.arc(Math.floor(GAME_WIDTH/2),Math.floor(GAME_HEIGHT/2),Math.floor(number/2),0,2*Math.PI,false);
    ctx.lineWidth = Math.ceil(number/50);
    ctx.strokeStyle = "#000000";
    ctx.stroke();






}





// event listener
window.addEventListener('click',
    function(event) {
        mouse.x = event.x;
        mouse.y=event.y;
//        console.log(mouse);
     
        
    });


setInterval(update, 1000 / FPS);
