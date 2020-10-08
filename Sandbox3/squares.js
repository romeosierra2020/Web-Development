import {update, draw} from "./game.js";

let canvas = document.getElementById("game-screen");
const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;
let lastTime = 0;
let number = 0;
let c = canvas.getContext("2d");
let mouse = {
    x: undefined,
    y: undefined
}



canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;


function Rectangle(x,y,w,h,dx,dy,red,green,blue){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h
    this.dx = dx;
    this.dy = dy;
    this.red = red.toString();
    this.green = green.toString();
    this.blue = blue.toString();


    this.draw = function(){

        let color = "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
        c.beginPath();
        c.lineWidth = 3;
        c.strokeRect(this.x,this.y,this.w,this.h);
        c.strokeStyle = color;
        c.stroke();

        
    }
    this.update = function(){
        this.x+=this.dx;
        this.y+=this.dy;
        if (this.x < 0 || this.x > (GAME_WIDTH -  this.w)){
        this.dx = -this.dx;
        }
        if (this.y<0 || this.y > (GAME_HEIGHT -  this.h)){
        this.dy = -this.dy;
        }

        if(mouse.x - this.x<50 && mouse.x - this.x > -50 &&
        mouse.y - this.y < 50 && mouse.y - this.y > -50){
            this.w+=1;
            this.h+=1;
        }else if (this.radius>15){
            this.w-=1;
            this.h-=1;
        }

        this.draw();


    }
}




let rectArray = [];
for (let i = 0; i<100; i++){
    let x = Math.random()*(GAME_WIDTH-30);
    let y = Math.random()*(GAME_HEIGHT-30);
    let dx = Math.random() * 6 -3;
    let dy = Math.random() * 6 -3;
    let w = Math.random() *20 + 10;
    let h = Math.random() * 20 + 10;
    let red = Math.floor(Math.random() *255)+1;
    let blue = Math.floor(Math.random() *255)+1;
    let green = Math.floor(Math.random() *255)+1;
    let rect = new Rectangle(x,y,w,h,dx,dy, red, green, blue);
    rectArray.push(new Rectangle(x,y,w,h,dx,dy,red,green,blue));
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
    for(let  i = 0; i<rectArray.length; i++){
        rectArray[i].update();

    }    




    
}

requestAnimationFrame(animate);