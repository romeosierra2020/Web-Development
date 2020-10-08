import {update, draw} from "./game.js";

let canvas = document.getElementById("game-screen");
//let ctx = canvas.getContext("2d");
const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;
const GAME_SPEED = 20;
let lastTime = 0;
let number = 0;
let c = canvas.getContext("2d");
let mouse = {
    x: undefined,
    y: undefined
}



canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;
/*
// rectangle
c.fillStyle = "#00FF00";
c.fillRect(100,100,50,50);

c.fillStyle = "#0000FF";
c.fillRect(200,200,50,50);


// line

c.beginPath();
c.moveTo(10,20);
c.lineTo(250, 600);
c.lineTo(300, 300);
c.strokeStyle = "#FF0000";
c.lineWidth = 3;
c.stroke();


//arc/circle
for(let i =0; i<20; i++){

    c.beginPath();
    c.arc(100+35*i,100+35*i,30,0,Math.PI * 2, false);
    c.stroke();
}*/

function Circle(x,y,dx,dy,radius,red,green,blue){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.red = red.toString();
    this.green = green.toString();
    this.blue = blue.toString();
    this.radius = radius;

    this.draw = function(){

        let color = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
        c.beginPath();
        c.lineWidth = 3;
        c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
        c.strokeStyle = color;
        c.stroke();

        
    }
    this.update = function(){
        this.x+=this.dx;
        this.y+=this.dy;
        if (this.x < this.radius || this.x > (GAME_WIDTH -  this.radius)){
        this.dx = -this.dx;
        }
        if (this.y<this.radius || this.y > (GAME_HEIGHT -  this.radius)){
        this.dy = -this.dy;
        }

        if(mouse.x - this.x<50 && mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 && mouse.y - this.y > -50){
            this.radius+=1;
        }else if (this.radius>15){
            this.radius-=1;
        }

        this.draw();


    }
}




let circleArray = [];
for (let i = 0; i<100; i++){
let x = Math.random()*(GAME_WIDTH-30);
let y = Math.random()*(GAME_HEIGHT-30);
let dx = Math.random() * 6 -3;
let dy = Math.random() * 6 -3;
let radius = Math.random() *20 + 10;
let red = Math.floor(Math.random() *255)+1;
let blue = Math.floor(Math.random() *255)+1;
let green = Math.floor(Math.random() *255)+1;

let circle = new Circle(x,y,dx,dy, radius, red, green, blue);
circleArray.push(new Circle(x,y,dx,dy,radius,red,green,blue));
}
window.addEventListener('mousemove',
    function(event) {
        mouse.x = event.x;
        mouse.y=event.y;
//        console.log(mouse);
     
        
    });

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);
    for(let  i = 0; i<circleArray.length; i++){
        circleArray[i].update();

    }    




    
}

requestAnimationFrame(animate);