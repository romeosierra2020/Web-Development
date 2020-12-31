const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 450;
let particleArray = [];
let mouse = {
    x: null,
    y: null,
    radius: 50
}
canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x + canvas.clientLeft/2;
    mouse.y = event.y + canvas.clientTop/2;
});
class Particle {
    constructor(r,g,b,a,x,y) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.density = Math.floor(Math.random() *10)+2;

    }
    update(){
        //console.log(this.x, mouse.x);
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        const maxDistance = 100;
        let force = (maxDistance - distance) / maxDistance;
        if(force < 0) force = 0;
        let directionX = (forceDirectionX * force * this.density);
        let directionY = (forceDirectionY * force * this.density);
        if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
        } else {
            if ( this.x !== this.baseX) {
                let dx = this.x - this.baseX;
                this.x -= dx/20;
            }
            if ( this.y !== this.baseY) {
                let dy = this.y - this.baseY;
                this.y -= dy/20;
            }
        }
    }
    draw() {
        ctx.fillStyle = 'rgba(' + this.r + ',' + this.g + ',' + this.b + ',' + this.a/256 +')'
        ctx.beginPath();
        ctx.arc(this.x, this.y, 8, 0, Math.PI * 2, false);
        ctx.fill();
    }
}

const image1 = new Image();
image1.src = 'androidparty.jpg';

image1.addEventListener('load', function() {
    ctx.drawImage(image1,0,0, 800, 450);
/*    const scannedImage = ctx.getImageData(0, 0, 800,450);
    const scannedData = scannedImage.data;
    for (let i=0; i< scannedData.length; i +=4){
        let x = (i%3200)/4;
        let y = (i - (x * 4))/3200;
        let r = scannedData[i];
        let g = scannedData[i+1];
        let b = scannedData[i+2];
        let a = scannedData[i+3];
        particleArray.push(new Particle(r,g,b,a,x,y));
        

        const total = scannedData[i] + scannedData[i+1] + scannedData[i+2];
        const meanColourValue = total/3;
        scannedData[i] = meanColourValue;
        scannedData[i+1] = meanColourValue;
        scannedData[i+2] = meanColourValue;

    }
    console.log('Done');
*/
});

function animate() {
    for(i = 0; i<particleArray.length; i+=8) {
        particleArray[i].update();
        particleArray[i].draw();

    }
    requestAnimationFrame(animate);
}
//animate();

