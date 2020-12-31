const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
const numberOfParticles = 300;


let titleElement = document.getElementById('title1');
let titleMeasurements = titleElement.getBoundingClientRect();
let title = {
    x: titleMeasurements.left,
    y: titleMeasurements.top,
    width: titleMeasurements.width,
    height: 10
}
class Particle {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.size = 1;//(Math.random() *3)+1;
        this.weight = (Math.random() *4) -2;
        this.directionX = (Math.random() *2)-1;
        this.colour = Math.random()*360;
    }
    update(){
        if(this.y > canvas.height) {
            this.y = 0- this.size;
            this.weight = (Math.random() *4) -2;
            this.x = Math.random() * canvas.width;
        }
        this.weight += 0.05;
        this.y += this.weight;
        this.x += this.directionX;

        if(
            this.x < title.x + title.width &&
            this.x + this.size > title.x &&
            this.y < title.y + title.height &&
            this.y + this.size > title.y
        ) {
            this.y -= 3;
            this.weight *= -1;
        }
    }
    draw(){
        ctx.fillStyle = 'hsl(' + this.colour.toString() + ',100%, 50%)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI *2);
        ctx.closePath();
        ctx.fill();
    }
}
function init(){
    particlesArray = [];
    for(let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesArray.push(new Particle(x,y));
    }
}

function animate() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for(i=0; i<particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animate);
}
init();
animate();

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    titleMeasurements = titleElement.getBoundingClientRect();
    title = {
        x: titleMeasurements.left,
        y: titleMeasurements.top,
        width: titleMeasurements.width,
        height: 10
    }
    init();
});