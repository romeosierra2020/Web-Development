document.addEventListener("DOMContentLoaded", function(){


//initialise constants

const canvas = document.getElementById('game-screen');
const ctx = canvas.getContext('2d');
const NUMBER_CARDS = 52;
const BTN_CONTAINER = document.getElementById('btn-container');


// Initialise variables
let gameOver = false;
let nextCard = 0;
let turn = 7;
let card;


let cardPositionIndex = 0;
let changed = false;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * .8;

// Initialise Arrays

let turnOptions = [];

let cardPositionArray = [[50, 50, 100, 150],
                        [160,50,100,150],
                        [270,50,100,150],
                        [380,50,100,150],
                        [50,210,100,150],
                        [160,210,100,150],
                        [270,210,100,150]
                        ];
let cardArray = [];
let shuffledArray = [];

function shuffleCards(){
shuffledArray = [];
let cardArray =    [['2C','2'],['3C','3'],['4C','4'],['5C','5'],['6C','6'],['7C','7'],['8C','8'],['9C','9'],['TC','a'],['JC','b'],['QC','c'],['KC','d'],['AC','e'],
                    ['2D','2'],['3D','3'],['4D','4'],['5D','5'],['6D','6'],['7D','7'],['8D','8'],['9D','9'],['TD','a'],['JD','b'],['QD','c'],['KD','d'],['AD','e'],
                    ['2S','2'],['3S','3'],['4S','4'],['5S','5'],['6S','6'],['7S','7'],['8S','8'],['9S','9'],['TS','a'],['JS','b'],['QS','c'],['KS','d'],['AS','e'],
                     ['2S','2'],['3S','3'],['4S','4'],['5S','5'],['6S','6'],['7S','7'],['8S','8'],['9S','9'],['TS','a'],['JS','b'],['QS','c'],['KS','d'],['AS','e']];
for (let i = 0; i < NUMBER_CARDS; i++) {
    let pos = Math.floor(Math.random()*cardArray.length);
    shuffledArray.push(cardArray[pos]);
    cardArray.splice(pos,1);
    }
      turnOptions = [["Higher", "Lower", "Change", "Reset"],
                  ["Higher", "Lower", "Change", "Reset"],
                  ["Higher", "Lower", "", "Reset"],
                  ["Higher", "Lower", "", "Reset"],
                  ["Higher", "Lower", "Change", "Reset"],
                  ["Higher", "Lower", "", "Reset"],
                  ["Higher", "Lower", "", "Reset"],
                  ["", "", "","Reset"]
                  ];
}
//-------------------------------------------------------------------------
function update() {


if(turn == 7) {
  reset();

}


    card = document.getElementById(shuffledArray[nextCard][0]);
        console.log(card);
    draw(card);
    nextCard+=1;
    turn+=1;
    cardPositionIndex +=1;
    updateButtons();


}

function selectOption(option) {

  switch(option){
    case 0: 
      if(turnOptions[turn][0] === "Higher") {
        higher();
        update();
      }
    break;
    case 1: 
      if(turnOptions[turn][1] === "Lower") {
        lower();
        update();
      }
    break;
    case 2:
      if(turnOptions[turn][2] === "Change") {
        change();
        update();
      } 
    break;
    case 3:
      reset();
      update();
    break;
  }
}

function draw(card) {

  ctx.drawImage(card,
                cardPositionArray[cardPositionIndex][0],
                cardPositionArray[cardPositionIndex][1],
                cardPositionArray[cardPositionIndex][2],
                cardPositionArray[cardPositionIndex][3]);

}




update();

function reset(){
  turn = 0;
  nextCard = 0;
  cardPositionIndex = 0;
  ctx.clearRect(0,0,canvas.width,canvas.height);
  shuffleCards();

 


}

function higher() {
  if(shuffledArray[nextCard][1] > shuffledArray[nextCard-1][1]) {
    console.log("Higher");
  } else {
    gameEnd();
  }
}

function lower() {
  if(shuffledArray[nextCard][1]  < shuffledArray[nextCard-1][1]) {
    console.log("Lower");
  } else {
    gameEnd();
  }

}

function change() {
  console.log("Change");
  turnOptions[turn][2] = "";
  turn -= 1;
  cardPositionIndex -=1;
  updateButtons();


}

function updateButtons() {
    while(BTN_CONTAINER.firstChild){
    BTN_CONTAINER.removeChild(BTN_CONTAINER.firstChild);
  }

  for(let i = 0; i<turnOptions[turn].length; i++) {
    const button = document.createElement('button');
    button.innerText = turnOptions[turn][i];
    button.classList.add("btn");
    button.addEventListener("click", () => selectOption(i));
    BTN_CONTAINER.appendChild(button);
  }
}

function gameEnd() {
  turnOptions[turn] = ["","","","Reset"];

  updateButtons();
  turn = 6;


}
});