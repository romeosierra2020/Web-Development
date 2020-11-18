const ac = new AudioContext();
const oscil = ac.createOscillator();
oscil.frequency.value = 440;
oscil.type = 'sine';
oscil.connect(ac.destination);
console.log(ac.state);
ac.state="running";
console.log(ac.state);




/*

const MAIN_IMAGE = document.getElementById("main-image");
const MAIN_DESCRIPTION = document.getElementById("main-description");
const TITLE = document.getElementById("title");
const URL = "https://api.nasa.gov/planetary/apod?api_key=oizv7HKn1rXQ7Ogl9uINLhcdheLZ20bqMW1EWlpd&date=";
let urlRequest = "https://api.nasa.gov/planetary/apod?api_key=oizv7HKn1rXQ7Ogl9uINLhcdheLZ20bqMW1EWlpd";
let dateModifier= 365;
updateDate();
getImage();


function resolved(response) {
    updateImage(response);

}

function error(err) {
    console.log(err);
}




function updateImage(response) {
        console.log(response);
        MAIN_IMAGE.style.objectFit = "cover";
        MAIN_IMAGE.setAttribute("src",response.url);
        MAIN_DESCRIPTION.innerHTML = response.explanation;
        TITLE.innerHTML = "NASA DAILY PHOTO: " + response.title;
}

function getImage() {
    fetch(URL)
        .then(response => response.json())
        .then(response => resolved(response))
        .catch(err => error(err));
}

function updateDate() {
    date.setDate(date.getDate()-dateModifier);
    let dd = date.getDate();
    dd = dd.toString();
    dd = dd.padStart(2,'0');
    let mm = date.getMonth()+1;
    mm = mm.toString();
    mm = mm.padStart(2,'0');
    let yyyy = date.getFullYear();
    yyyy = yyyy.toString();
    appDateString = yyyy + "-" + mm + "-" +dd;
    urlRequest = URL + appDateString;
}

/*

View
Display image (URL, Title, Description)
Set Event listeners
Recieve input
Send Input to Octopus




Octopus
Call Display Image (Image URL, Image Title, Image Description)
Call


Logic


Module 1: Run Module
Module 2: View
    Display image (URL, Title, Description)
    Set Event listeners
    Recieve input
    Send Input to Octopus
Module 3: Control
    Call Display Image (Image URL, Image Title, Image Description)

Module 4: Model




const MAIN_IMAGE = document.getElementById("main-image");
const MAIN_DESCRIPTION = document.getElementById("main-description");
const TITLE = document.getElementById("title");
const XHR = new XMLHttpRequest();
const URL = "https://api.nasa.gov/planetary/apod?api_key=oizv7HKn1rXQ7Ogl9uINLhcdheLZ20bqMW1EWlpd";
const UP_ARROW = document.getElementById("up-arrow");
const DOWN_ARROW = document.getElementById("down-arrow");
let returnArray = {};
let date = new Date();
let dateModifier = 0;
let maxDateModifier = 0;
let appDateString;
let currentImage = 50;
let urlRequest = URL;
let dateDirection = 1;
let imageArray;
let imageElements = [document.getElementById("image1"),
                        document.getElementById("image2"),
                        document.getElementById("image3"),
                        document.getElementById("image4"),
                        document.getElementById("image5")];


// Add event listeners to up and down arrows

DOWN_ARROW.addEventListener("click", function() {
     downArrow();
 });

UP_ARROW.addEventListener("click", function() {
     upArrow();
 });


updateDate();
imageArray = dataRequest();
function dataRequest() {
    fetch(urlRequest)
        .then(response => response.json())
        .then(data => return data)
        .catch(err => console.log(err));
}

console.log('imageArray',imageArray);
updateImage();


/*
fetch(URL)
    .then(response => {
        console.log('first then',response.json());
    })
    .then(response => {
        console.log('2nd then',response);
    })
    .catch(err => {
        console.log(err);
    });


/*
// initialise Image Array
for (let i = 0; i<6; i++) {
    updateDate();
    update();
    while (returnArray.url.search("jpg")<1) {
        dateModifier +=1;
        updateDate();
        update();        

    }
    imageArray.push(returnArray);
    dateModifier +=1;
}
maxDateModifier = dateModifier;
updateImage();

// Get Image 

function update() {
    XHR.onreadystatechange = function() {
        if(XHR.readyState ==4){
            if(XHR.status == 200) {
                returnArray = JSON.parse(XHR.responseText);
                if(returnArray.url.search("jpg")>0) {
                    //
                } else {
                    console.log("No JPG");
                    dateModifier += dateDirection;
                    updateDate();
                }
            } else if (XHR.status == 404) {
                console.log("Resource not Found");
                dateModifier += dateDirection;
                updateDate();

            }
        }
    }

    XHR.open("get",urlRequest, true);
    XHR.send();
}
*/

/*


function updateDate() {
    date.setDate(date.getDate()-dateModifier);
    let dd = date.getDate();
    dd = dd.toString();
    dd = dd.padStart(2,'0');
    let mm = date.getMonth()+1;
    mm = mm.toString();
    mm = mm.padStart(2,'0');
    let yyyy = date.getFullYear();
    yyyy = yyyy.toString();
    appDateString = yyyy + "-" + mm + "-" +dd;
    urlRequest = URL + appDateString;
}

function upArrow() {
    currentImage ++;
}

function downArrow() {
    currentImage --;
}





//bulid view recycler
    Build Image Array
        download image details for main + 7 images
            fetch image details
            confirm image detaals are jpeg
            move to next image if so
            else try again
        add details of downloaded image to Image array
        update display

//update display
    display main image
    display thumbs



// accecpt input
    create event listener

//Act on Input

    up arrow
        increment date Modifier
        fetch image details
        confirm jpeg
        if not, increment dateModifier and try again.
        update image recycler
        update display
*/