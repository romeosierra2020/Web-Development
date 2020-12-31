const canvas=document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let partclieArray;

function Particle(x,y,directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
}

Particle.prototype.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
}

Particle.prototype.update = function() {
    this.x += this.directionX;
    this.y += this.directionY;
    if(this.x + this.size > canvas.width || this.x - this.size < 0) {
        this.directionX = -this.directionX;
    }
    if(this.y + this.size > canvas.height || this.y - this.size < 0) {
        this.directionY = - this.directionY;
    }
    this.draw();
}

function init() {
    particleArray = [];
    for(let i = 0; i < 100; i++) {
        let size = Math.random() *18 +2;
        let x = Math.random() * (canvas.width - size * 2);
        let y = Math.random() * (canvas.height - size * 2);
        let directionX = Math.random() *0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = 'white';
        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }

    requestAnimationFrame(animate)
}

init();
animate();