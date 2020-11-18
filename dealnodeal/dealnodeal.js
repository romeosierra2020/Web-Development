const NUMBER_BOXS = 9;
const MAX_POINTS = 45;


let boxArray = [];
let boxContentArray = [];
let turn = 0;
let pointLost = 0;
let currentOffer = 0;
let dealtFlag = false;
let dealAmount = 0;

// set event listeners 

for(let i=1; i<10; i++) {
    let boxId = "box" + i.toString();
    document.getElementById(boxId).addEventListener('click', function(){
        boxClicked();
    });
}
document.getElementById("deal-dealt").addEventListener('click', function(){
    boxClicked();
});

document.getElementById("reset").addEventListener('click', function(){
    boxClicked();
});

reset();



function boxClicked() {
        console.log(event.target.id);
        switch(event.target.id) {
            case "box1-bot" : {
                openBox(1);
                break;
            }
            case "box2-bot" : {
                openBox(2);
                break;
            }
            case "box3-bot" : {
                openBox(3);
                break;
            }
            case "box4-bot" : {
                openBox(4);
                break;
            }
            case "box5-bot" : {
                openBox(5);
                break;
            }
            case "box6-bot" : {
                openBox(6);
                break;
            }
            case "box7-bot" : {
                openBox(7);
                break;
            }
            case "box8-bot" : {
                openBox(8);
                break;
            }
            case "box9-bot" : {
                openBox(9);
                break;
            }
            case "deal-dealt" : {
                dealDealt(currentOffer);
                break;
            }
            case "reset" : {
                reset();
                break;
            }
            
        }
}


function reset() {
// Initialise/Reset Game
// Hide all box tops
    console.log("reset called");
    for(let i=1; i<10; i++) {
        let boxId = "box" + i.toString();
        boxId += "-top";
        document.getElementById(boxId).style.visibility="hidden";
    }
    document.getElementById("deal-dealt").innerHTML= "Deal";
    gameTurn = 1;
    pointLost = 0;
    currentOffer = 0;
    boxContentArray = [];
    dealtFlag = false;
    dealAmount = 0;
    shuffleBoxs();
}


// Shuffle the contents of the boxs
function shuffleBoxs() {
    let pointsArray = [1,2,3,4,5,6,7,8,9];
    let nextBox = [];
    for (let i = 0; i < NUMBER_BOXS; i++) {
        let pos = Math.floor(Math.random()*pointsArray.length);
        boxContentArray[i] = [pointsArray[pos], false];
        pointsArray.splice(pos,1);
    }
}

// If box closed, set to open and display. Update offer

function openBox(box) {
        gameTurn += 1;
        if(boxContentArray[box-1][1] == false){
            let boxId = "box" + box.toString();
            boxId += "-top";
            document.getElementById(boxId).style.visibility="visible";
            document.getElementById(boxId).innerHTML=boxContentArray[box-1][0];
            boxContentArray[box-1][1] = true;
            turn+=1;
            pointLost += boxContentArray[box-1][0];
            if(gameTurn < 10) {
                currentOffer = Math.floor((MAX_POINTS - pointLost)/(10-gameTurn));
                document.getElementById("offer").innerHTML= "Current Offer: " + currentOffer.toString();
            } else {
                if(dealtFlag == true){
                    finalScore = dealAmount;
                }
                else {
                    finalScore = boxContentArray[box-1][0];
                }
                document.getElementById("final-score").innerHTML = "Final Score: " + finalScore.toString();
            }   

        }
}

function dealDealt() {
    console.log(dealtFlag, gameTurn);
    if(dealtFlag == false && gameTurn != 1) {
        dealtFlag = true;
        document.getElementById("deal-dealt").innerHTML= "Dealt at: " + currentOffer.toString();
        dealAmount = currentOffer;
    }
}
