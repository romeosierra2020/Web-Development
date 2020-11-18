import {ctx} from './app.js';
export function update(counter) {
    
    

    ctx.clearRect(0,0,800,500);
    ctx.beginPath();
    ctx.moveTo(10, 250);
    ctx.bezierCurveTo(10, 250, counter,100,270,250 );

    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();


//    ctx.beginPath();
//    ctx.moveTo(270, 250);
    ctx.bezierCurveTo(270,250, 530-counter,350,530,250 );

    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

//    ctx.beginPath();
//    ctx.moveTo(530, 250);
    ctx.bezierCurveTo(530, 250, counter+520,100,790,250 );
  
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    

}