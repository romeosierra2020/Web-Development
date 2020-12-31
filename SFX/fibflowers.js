const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
ctx.globalCompositeOperation = 'destination-over';
let size = 20;
let number = 0;
let scale = 10;
let numberFactor = (Math.random() * 5) -1;
let angleFactor = (Math.random() * 5) -1;
let colour = Math.random() *360;
function drawflower() {
    let angle = number * angleFactor;
    let radius = scale * Math.sqrt(number);
    let positionX = radius * Math.sin(angle) + canvas.width/2;
    let positionY = radius * Math.cos(angle) + canvas.height/2;
    ctx.fillStyle = 'hsl(' + colour.toString() + ',100%, 50%)';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(positionX,positionY,number,0,Math.PI*2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    number += numberFactor;

}
function animate() {

    drawflower();
    if (number > 300) return;
    requestAnimationFrame(animate);
}

animate();