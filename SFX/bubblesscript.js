const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;
let gameOver = false;
let score = 0;
let gameFrame = 0;
ctx.font = '50px Georgia';
let gameSpeed = 1;
let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}


canvas.addEventListener('mousedown', function(event){
    mouse.click = true;
    mouse.x = event.x - canvasPosition.left;
    mouse.y = event.y - canvasPosition.top;
});

canvas.addEventListener('mouseup', function(event){
    mouse.click = false;
    mouse.x = event.x - canvasPosition.left;
});
const playerLeft = new Image();
playerLeft.src = 'player_swim_left.png';
const playerRight = new Image();
playerRight.src = 'player_swim_right1.png';

class Player {
    constructor() {
        this.x = canvas.width;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 415;
        this.spriteHeight = 395;
    }
    update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        let theta = Math.atan2(dy,dx);
        this.angle = theta;
        if (mouse.x != this.x) {
            this.x -=dx/30;
        }
        if (mouse.y != this.y) {
            this.y -=dy/30;
        }
        if(gameFrame % 5 ===0) {
            this.frame ++;
            if(this.frame >= 12) this.frame = 0;
            if((this.frame+1) % 4 ===0) {
                this.frameX = 0;
                this.frameY++;
            } else {
                this.frameX ++;
            }
            if(this.frameY >=3) this.frameY = 0;
        }        
    }
    draw(){

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        if( this.x >= mouse.x) {
            ctx.drawImage(playerLeft, 
                this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
                this.spriteWidth, this.spriteHeight, 
                0-50,0-50, 
                this.spriteWidth/4, this.spriteHeight/4);
        } else {
            ctx.drawImage(playerRight, 
                this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
                this.spriteWidth, this.spriteHeight, 
                0-50,0-50, 
                this.spriteWidth/4, this.spriteHeight/4);
        }
        ctx.restore();
    }
}
const bubbleImage = new Image();
bubbleImage.src = 'bubble_pop_one_spritesheet_512px_by_512px_per_frame.png';
const player = new Player();
const bubblesArray = [];
class Bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 100;
        this.radius = 50;
        this.speed = Math.random() * 5 + 1;
        this.distance;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 512;
        this.spriteHeight = 512;
        this.counted = false;
        this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2';
    }
    update() {
        this.y -= this.speed;
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        this.distance = Math.sqrt(dx*dx + dy * dy);
        if(this.counted && gameFrame % 5 ===0) {
            this.frame ++;
            if((this.frame+1) % 3 ===0) {
                this.frameX = 0;
                this.frameY++;
            } else {
                this.frameX ++;
            }
        }      
    }
    draw() {
    /*    ctx.fillStyle = 'blue';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke(); */
        ctx.drawImage(bubbleImage, 
            this.frameX*this.spriteWidth, this.frameY* this.spriteHeight, 
            this.spriteWidth, this.spriteHeight, 
            this.x-64, this.y-64, 
            this.spriteWidth/4,this.spriteHeight/4);  
    }
}
const bubblePop1 = document.createElement('AUDIO');
bubblePop1.src = './Plop.ogg';
const bubblePop2 = document.createElement('AUDIO');
bubblePop2.src = './Plop.ogg';
function handleBubbles() {
    if (gameFrame % 50 == 0) {
        bubblesArray.push(new Bubble());
    }
    for ( let i = 0; i < bubblesArray.length; i++) {
        bubblesArray[i].update();
        bubblesArray[i].draw();
    if ((bubblesArray[i].y < 0 - bubblesArray[i].radius * 2)) {
        bubblesArray.splice(i,1);
        i--;
    } else if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius) {
            if(!bubblesArray[i].counted) {
                if (bubblesArray[i].sound == 'sound1') {
//                        bubblePop1.play();
                } else {
//                        bubblePop2.play();
                }
                bubblesArray[i].counted = true;
                score ++;
                bubblesArray[i].speed = 0;
            }
        } else if(bubblesArray[i].counted = true && bubblesArray[i].frame > 5) {
            bubblesArray.splice(i,1);
            i--;
        }
    }
}
const background = new Image();
background.src = 'background1.png';
const BG = {
    x1: 0,
    x2: canvas.width,
    y: 0,
    width: canvas.width,
    height: canvas.height
}

function handleBackground() {
    BG.x1-= gameSpeed;
    if(BG.x1 < -BG.width) BG.x1 = BG.width;    
    BG.x2-=gameSpeed;
    if(BG.x2 < -BG.width) BG.x2 = BG.width;   
    ctx.drawImage(background,BG.x1,BG.y,BG.width, BG.height);
    ctx.drawImage(background,BG.x2,BG.y,BG.width, BG.height);
}

class Enemy {
    constructor() {
        this.x = canvas.width +200;
        this.y = Math.random() * (canvas.height - 150) +90;
        this.radius = 60;
        this.speed = Math.random() *2 +2;
        this.angle = 0;
        this.frame = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 327;
    }
    draw() {

        ctx.drawImage(enemyImage, 
            this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, 
            this.spriteWidth, this.spriteHeight, 
            this.x-62, this.y-45, 
            this.spriteWidth/4, this.spriteHeight/4);        

    }
    update() {
        this.x -= this.speed;
        if (this.x < - this.radius *2) {
            this.x = canvas.width + 200;
            this.y = Math.random() * (canvas.height - 150) + 90;
            this.speed = Math.random() * 2 + 2;
        }
        if(gameFrame % 5 ===0) {
            this.frame ++;
            if(this.frame >= 12) this.frame = 0;
            if((this.frame+1) % 4 ===0) {
                this.frameX = 0;
                this.frameY++;
            } else {
                this.frameX ++;
            }
            if(this.frameY >=3) this.frameY = 0;
        }
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        const distance = Math.sqrt(dx * dx +dy * dy);
        if(distance < this.radius + player.radius) {
            handleGameOver();
        }
    }
}

function handleGameOver() {
    ctx.fillStyle = 'white';
    ctx.fillText('GAME OVER, you scored: '+ score, 110, 250);
    gameOver = true;
}
const enemyImage = new Image();
enemyImage.src = 'enemy1.png';
const enemy1 = new Enemy();
function handleEnemys() {
    enemy1.draw();
    enemy1.update();

}
function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    handleBackground();
    handleBubbles();

    player.update();
    player.draw();
    handleEnemys();
    ctx.fillStyle = 'black';
    ctx.fillText('score: ' + score, 10 , 50);
    gameFrame++;
    if (!gameOver) requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', function() {
    canvasPosition = canvas.getBoundingClientRect();

});