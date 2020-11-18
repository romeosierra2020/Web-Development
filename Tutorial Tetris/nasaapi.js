


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = 500;
const API_KEY = "oizv7HKn1rXQ7Ogl9uINLhcdheLZ20bqMW1EWlpd";
const BASIC_URL = "https://api.nasa.gov/planetary/apod"
let responseString;
let pictureURLStart, pictureURLEnd;
let subResponseString;
let char;
let img = new Image(GAME_WIDTH,GAME_HEIGHT);
const OPT_DATE="&date=";




canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;


let HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        let anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


let client = new HttpClient();
client.get('https://api.nasa.gov/planetary/apod?api_key=oizv7HKn1rXQ7Ogl9uINLhcdheLZ20bqMW1EWlpd', function(response) {
   
    responseString = String(response);
    console.log(responseString);
    pictureURLStart = responseString.search('\"url\"')+7;

    for(let i=pictureURLStart; i<responseString.length; i++) {
        char = responseString.substr(i,3);
        if(char == "jpg"){
            pictureURLEnd = i+3;
            break;
        }
    }



  
    console.log(canvas);

    subResponseString = responseString.substr(pictureURLStart, pictureURLEnd - pictureURLStart);   
    console.log(subResponseString);
    img.src = subResponseString;
    ctx.drawImage(img,0,0,img.width, img.height,0,0,canvas.width, canvas.height);



});