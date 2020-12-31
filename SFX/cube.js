const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const H = window.innerHeight;
const W = window.innerWidth;
const MODEL_MIN_X = -2;
const MODEL_MAX_X = 2;
const MODEL_MIN_Y = -2;
const MODEL_MAX_Y = 2;
canvas.width = W;
canvas.height = H;
const DELAY = 1;
const STEP = 0.5;
let count = 0;
const WIDTH = 600;
const HEIGHT = 600;
let theta = 0;
let deltaTheta = 0.01;
let points = [];

function initGeometry() {
    for(let x = -1; x<=1; x+=STEP) {
        for(let y = -1; y<=1; y+=STEP) {
            for(let z = -1; z<=1; z+=STEP) {
                points.push([x,y,z]);
            }
        }

    }
}
function perspectiveProjectionPoint(point) {
    let x = point[0];
    let y = point[1];
    let z = point[2];
    return [
        x/(z+4),
        y/(z+4)
    ]
}

function project(point){
    let perspectivePoint = perspectiveProjectionPoint(point);
    let x = perspectivePoint[0];
    let y = perspectivePoint[1];
    return [
        WIDTH * (x - MODEL_MIN_X) / (MODEL_MAX_X - MODEL_MIN_X),
        HEIGHT * (1 - (y - MODEL_MIN_Y) / (MODEL_MAX_Y - MODEL_MIN_Y))
    ];
}

function render() {
    ctx.clearRect(0,0,1000,1000);
    theta += deltaTheta;
    points.forEach((point) => {
        point = rotateY(point, theta);
        point = rotateX(point, 0.7*theta);
        renderPoint(point);
    });
    requestAnimationFrame(render);
}
function renderPoint(point) {
    let projectedPoint = project(point);
    let x = projectedPoint[0];
    let y = projectedPoint[1];
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+1, y+1);
    ctx.stroke();
}
function rotateX(point, theta) {
    let x = point[0];
    let y = point[1]; 
    let z = point[2];
    return [
        x,
        Math.cos(theta) * y -Math.sin(theta)*z,
        Math.sin(theta) * y + Math.cos(theta) *z
    ];
}
function rotateY(point, theta) {
    let x = point[0];
    let y = point[1]; 
    let z = point[2];
    return [
        Math.cos(theta) * x -Math.sin(theta)*z,
        y,
        Math.sin(theta) * x + Math.cos(theta) *z
    ];
}
initGeometry();
render();














































/*
let shape = [[150,150,1],[350,150,-1],[350,350,-1],[150,350,1]];
console.log(ctx);
function draw() {
    ctx.beginPath();
    ctx.lineTo(shape[0][0],shape[0][1]);
    ctx.lineTo(shape[1][0],shape[1][1]);
    ctx.lineTo(shape[2][0],shape[2][1]);
    ctx.lineTo(shape[3][0],shape[3][1]);

    ctx.closePath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
   
}

function animate() {

        update();
        ctx.clearRect(0,0,WIDTH, HEIGHT);
        draw();


    requestAnimationFrame(animate);
}

function update() {
    let factor = shape[0][0] - 150/2;
    count+=0.005;
    if(count ===360){
        count = 0;
    }
    let dx = Math.cos(count) * 1;
    console.log(dx);


    for(let i=0; i<4; i++) {
        shape[i][0] += shape[i][2]*dx;
        if(shape[i][0]>=350 || shape[i][0] <= 150) {
            shape[i][2]=-shape[i][2];
        }
    }
}
animate();
*/