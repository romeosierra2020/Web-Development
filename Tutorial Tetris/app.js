


import {update} from "./update.js";


let canvas = document.querySelector("canvas");
export const ctx = canvas.getContext('2d');
const GAME_WIDTH = 800;
const GAME_HEIGHT = 500;
const FPS = 10;
let counter = 10;
let direction = 10;


canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

/*

function animate() {
    setTimeout(function() {
        requestAnimationFrame(animate);
        update(counter);
            counter+=direction;
    if(counter > 260 || counter < 10){
        direction = -direction;
    }
    }, 1000 / FPS);
}

animate();


update();*/
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
let responseString;
let pictureURLStart, pictureURLEnd;
let subResponseString;
let char;
let img = new Image;

let client = new HttpClient();
client.get('https://api.nasa.gov/planetary/apod?api_key=oizv7HKn1rXQ7Ogl9uINLhcdheLZ20bqMW1EWlpd&date=2020-10-07', function(response) {
   
    responseString = String(response);
    console.log(responseString);
    pictureURLStart = responseString.search('hdurl')+8;

    for(let i=pictureURLStart; i<responseString.length; i++) {
        char = responseString.substr(i,3);
        if(char == "jpg"){
            pictureURLEnd = i+3;
            break;
        }
    }

    console.log(pictureURLStart,pictureURLEnd);
    subResponseString = responseString.substr(pictureURLStart, pictureURLEnd - pictureURLStart);   
    img.src=subResponseString; 
//    canvas.width=img.width;
//    canvas.height= img.height;
    ctx.drawImage(img, 0,0, img.width, img.height, 0,0,canvas.width,canvas.height);
       console.log(img);
});