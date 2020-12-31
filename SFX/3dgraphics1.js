const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const SCREEN_HEIGHT = window.innerHeight;
const SCREEN_WIDTH = window.innerWidth;
canvas.height = SCREEN_HEIGHT;
canvas.width = SCREEN_WIDTH;
console.log(ctx);   
const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const FIELD_OF_VIEW = 90;
const VIEW_NEAR = 20;
const VIEW_FAR = 100;
const FIELD_OF_VIEW_RAD = 1 / (Math.tan(FIELD_OF_VIEW * 0.5 / 108 * Math.PI));
const DISTANCE_FACTOR = (VIEW_FAR/(VIEW_FAR - VIEW_NEAR))-((VIEW_FAR * VIEW_NEAR) / (VIEW_FAR - VIEW_NEAR));
console.log(DISTANCE_FACTOR);
// Mesh is a series of triangles
//triangle is a series of points
//points have x,yand z coordinates

//Projection

//Screen runs from -1 to +1 in x and y directions.
// aspect ratio is screen height / screen width
// scale x by using screen height / screen width
// scaling factor, theta(t), relates to field of view
//apply scaling factor to x and y
// scaling factor (f) = 1 / (tan(t/2))
//z-far = distance to furthest viewable distance
//z-near = distance from eye to screen
// z factor is ratio between z-far and z-near offst by z-near
// z-factor = (z-far/(z-far - z-near)) - ((z-far * z-near) / (z-far - z-near))
// x movement and y movement scales down depending on z

// projection for x = (((w/h) * 1 / (tan(t/2))) * x) / z
// projection for y = ((1 / (tan(t/2))) * y) / z
// projection for z = (z-far/(z-far - z-near)) - ((z-far * z-near) / (z-far - z-near))

// simplified:

//aspectRatio(a) = SCREEN_WIDTH / SCREEN_HEIGHT
//fieldOfView(f) = 1 / (tan(t/2))
//distanceNormalisaton(q) = (z-far/(z-far - z-near))

// px = (a * f * x) / z
// py = (f * y) / z
// pz = (z * q) - (z-near * q)

// PROJECTION MATRIX

// accepts input array of [x,y,z,1] ?? final 1 to carry through z value. Should this be = z ??
// multiplys by projection matrix relative row and adds all values in column
// projection matrix: [af, 0, 0, 0], [0, f, 0, 0], [0, 0, q, 1] [0, 0, (-z-near * q), 0]
// multiply input x by all values of column onwe and add together
// multX = (x * a *f) + (x * 0) + (x * 0) + (x * 0)
// multY = (y * 0) + (y * f) + (y * 0) + (y * 0)
// multZ = (z * 0) + (z * 0) + (z * q) + (-z-near * q)  // last value is drawn directly from projection matrix without multiplying by z ?? how work with multiplying through ??
// multNormZ = (1 * 0) + (1 * 0) + (1 * 1) +(1 * 0)



let cubeArray = [[
                [[0,0,0], [0,1,0], [1,1,0]], //south top
                [[0,0,0], [1,1,0], [1,0,0]]],
                [
                [[1,0,0], [1,1,0], [1,1,1]], //east
                [[1,0,0], [1,1,1], [1,0,1]]],
                [
                [[1,0,1], [1,1,1], [0,1,1]], //north
                [[1,0,1], [0,1,1], [0,0,1]]],
                [
                [[0,0,1], [0,1,1], [0,1,0]], //west
                [[0,0,1], [0,1,0], [0,0,0]]],
                [
                [[0,1,0], [0,1,1], [1,1,1]], //top
                [[0,1,0], [1,1,1], [1,1,0]]],
                [
                [[1,0,1], [0,0,1], [0,0,0]], //bottom
                [[1,0,1], [0,0,0], [1,0,0]]]
                ];

console.log(cubeArray);                
let projectedX1, projectedX2, projectedX3;
let projectedY1, projectedY2, projectedY3;
let projectedZ1, projectedZ2, projectedZ3;

for(let i = 0; i<cubeArray.length; i++) {
    for(let j = 0; j<cubeArray[i].length; j++){
            ctx.lineWidth = 3;
            ctx.strokeStyle = '#000000';
            projectedX1 = 200 + 300 * projectX(cubeArray[i][j][0][0],cubeArray[i][j][0][2]+3);
            projectedY1 = 200 + 300 * projectX(cubeArray[i][j][0][1],cubeArray[i][j][0][2]+3);
            projectedX2 = 200 + 300 * projectX(cubeArray[i][j][1][0],cubeArray[i][j][1][2]+3);
            projectedY2 = 200 + 300 * projectX(cubeArray[i][j][1][1],cubeArray[i][j][1][2]+3);
            projectedX3 = 200 + 300 * projectX(cubeArray[i][j][2][0],cubeArray[i][j][2][2]+3);
            projectedY3 = 200 + 300 * projectX(cubeArray[i][j][2][1],cubeArray[i][j][2][2]+3);
            ctx.beginPath();
            ctx.moveTo(projectedX1, projectedY1);
            ctx.lineTo(projectedX2, projectedY2);
            ctx.lineTo(projectedX3, projectedY3);
            ctx.lineTo(projectedX1, projectedY1);
            console.log(projectedX1, projectedY1);
            console.log(projectedX2, projectedY2);
            console.log(projectedX3, projectedY3);
            ctx.closePath();
            ctx.stroke();
    }
}





function projectX(x,z) {
    if(z !== 0){
        return (ASPECT_RATIO * FIELD_OF_VIEW_RAD * x)/z * DISTANCE_FACTOR;
    } else {
        return (ASPECT_RATIO * FIELD_OF_VIEW_RAD * x);
    }
}


function projectY(y,z) {
    if(z !== 0){
        return (FIELD_OF_VIEW_RAD * y)/z * DISTANCE_FACTOR;
    } else {
        return (FIELD_OF_VIEW_RAD * y);
    }
}


function projectedX(z) {
    return (z-far/(z-far - z-near)) - ((z-far * z-near) / (z-far - z-near))
}