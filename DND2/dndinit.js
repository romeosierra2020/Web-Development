

const BOX_VALUES = [[.01,   "    1p"],
                    [1,     "    £1"],
                    [10,    "   £10"],
                    [100,   "   £100"],
                    [500,   "   £500"],
                    [1000,  "  £1,000"],
                    [5000,  "  £5,000"],
                    [10000, " £10,000"],
                    [50000, " £50,000"],
                    [100000,"£100,000"]];
const BTNA = document.getElementById("btnA");
BTNA.addEventListener("click", function(){
    selection = 0;
    button();
});
const BTNB = document.getElementById("btnB");
BTNB.addEventListener("click", function(){
    selection = 1;
    button();
});
const BTNC = document.getElementById("btnC");
BTNC.addEventListener("click", function(){
    selection = 2;
    button();
});
const BTND = document.getElementById("btnD");
BTND.addEventListener("click", function(){
    selection = 3;
    button();
});
const BTNE = document.getElementById("btnE");
BTNE.addEventListener("click", function(){
    selection = 4;
    button();
});
const BTNF = document.getElementById("btnF");
BTNF.addEventListener("click", function(){
    selection = 5;
    button();
});
const BTNG = document.getElementById("btnG");
BTNG.addEventListener("click", function(){
    selection = 6;
    button();
});
const BTNH = document.getElementById("btnH");
BTNH.addEventListener("click", function(){
    selection = 7;
    button();
});
const BTNI = document.getElementById("btnI");
BTNI.addEventListener("click", function(){
    selection = 8;
    button();
});
const BTNJ = document.getElementById("btnJ");
BTNJ.addEventListener("click", function(){
    selection = 9;
    button();
});
const BTN_OPT = document.getElementById("btnOpt");
BTN_OPT.addEventListener("click", function(){
    console.log("Button Opt");
});


const COLOR_ACCENT1 = "#EF233C";
const COLOR_ACCENT2 = "#8D99A";
const COLOR_BOX = "#D90429";
const COLOR_GAME_BOARD = "#EDF2F4";
const COLOR_TEXT = "#2B2D42";
const DELAY = 75;

const GAME_BOARD = document.getElementById("game_board");
const GAME_HEIGHT = window.innerHeight / 1.5;
const GAME_WIDTH = window.innerWidth *.69;




const BOX_HEIGHT = GAME_HEIGHT/5;
const BOX_WIDTH = GAME_WIDTH/5;

const ctx = GAME_BOARD.getContext("2d");
let box =[];
let boxOrder = [0,1,2,3,4,5,6,7,8,9];
let count = 0;
let turn = 0;
let selection = 0;
let playerBox = 0;
let valuesGone = 0;
let offer = 0;
let valuesInPlay = [];

GAME_BOARD.width = GAME_WIDTH;
GAME_BOARD.height = GAME_HEIGHT;
GAME_BOARD.style = "background-color: "+ COLOR_GAME_BOARD;
const INIT_POS = [[BOX_WIDTH*2, BOX_HEIGHT*0.2],
                   [BOX_WIDTH*1.4, BOX_HEIGHT*1.4],
                   [BOX_WIDTH*2.6, BOX_HEIGHT*1.4],
                   [BOX_WIDTH*0.8, BOX_HEIGHT*2.6],
                   [BOX_WIDTH*2, BOX_HEIGHT*2.6],
                   [BOX_WIDTH*3.2, BOX_HEIGHT*2.6],
                   [BOX_WIDTH*0.2, BOX_HEIGHT*3.8],
                   [BOX_WIDTH*1.4, BOX_HEIGHT*3.8],
                   [BOX_WIDTH*2.6, BOX_HEIGHT*3.8],
                   [BOX_WIDTH*3.8, BOX_HEIGHT*3.8]];

const GAME_POS = [[BOX_WIDTH*0.2, BOX_HEIGHT*1.4],
                   [BOX_WIDTH*1.4, BOX_HEIGHT*1.4],
                   [BOX_WIDTH*2.6, BOX_HEIGHT*1.4],
                   [BOX_WIDTH*0.2, BOX_HEIGHT*2.6],
                   [BOX_WIDTH*1.4, BOX_HEIGHT*2.6],
                   [BOX_WIDTH*2.6, BOX_HEIGHT*2.6],
                   [BOX_WIDTH*0.2, BOX_HEIGHT*3.8],
                   [BOX_WIDTH*1.4, BOX_HEIGHT*3.8],
                   [BOX_WIDTH*2.6, BOX_HEIGHT*3.8],
                   [BOX_WIDTH*3.8, BOX_HEIGHT*3.8]];

function populateValues () {
    for(let i =0; i< BOX_VALUES.length; i++) {
        valuesInPlay[i] = BOX_VALUES[i][0];
        document.getElementById("value" + i.toString()).innerHTML = BOX_VALUES[i][1];
    }
    
}

class Box {
    constructor(x,y,gameX, gameY,value,letter) {
        this.x = x;
        this.y = y;
        this.gameX = gameX;
        this.gameY = gameY;
        this.letter = letter;
        this.isOpen = false;
        this.value = value[0];
        this.valueStr = value[1];
    }
    draw(){
        if(this.isOpen == true) {
            ctx.fillStyle = COLOR_BOX;
            ctx.fillRect(this.x, this.y, BOX_WIDTH, BOX_HEIGHT*0.45);
            ctx.fillStyle = COLOR_GAME_BOARD;
            ctx.fillRect(this.x+0.05*BOX_WIDTH, this.y + 0.05 * BOX_HEIGHT, BOX_WIDTH*0.9, BOX_HEIGHT*0.35);
            ctx.strokeStyle = COLOR_TEXT;
            ctx.strokeRect(this.x + 0.08*BOX_WIDTH, this.y + 0.08 * BOX_HEIGHT, BOX_WIDTH*.84, BOX_HEIGHT*.29);
            ctx.font = (BOX_HEIGHT*0.25).toString() +"px trebuchet MS";
            ctx.fillStyle = COLOR_TEXT;
            ctx.fillText(this.valueStr,this.x+0.2*BOX_WIDTH, this.y + .3 * BOX_HEIGHT); 
        }

    
        // draw bottom of box.
        ctx.beginPath();
        ctx.moveTo(this.x,this.y+(0.55*BOX_HEIGHT));
        ctx.lineTo(this.x + BOX_WIDTH, this.y+(0.55*BOX_HEIGHT));
        ctx.strokeStyle = COLOR_ACCENT1
        ctx.stroke();
        ctx.fillStyle = COLOR_BOX;
        ctx.fillRect(this.x,this.y+(0.45*BOX_HEIGHT), BOX_WIDTH, BOX_HEIGHT/10);
        ctx.fillRect(this.x, this.y + .56*BOX_HEIGHT, BOX_WIDTH, BOX_HEIGHT*.45);
        ctx.fillStyle = COLOR_GAME_BOARD;
        ctx.fillRect(this.x+0.3*BOX_WIDTH, this.y + 0.60 * BOX_HEIGHT, BOX_WIDTH*0.4, BOX_HEIGHT*0.35);
        ctx.strokeStyle = COLOR_TEXT;
        ctx.strokeRect(this.x+0.33*BOX_WIDTH, this.y + .63 * BOX_HEIGHT, BOX_WIDTH*.34, BOX_HEIGHT*.29);
        ctx.font = (BOX_HEIGHT*0.25).toString() +"px trebuchet MS";
        ctx.fillStyle = COLOR_TEXT;
        ctx.fillText(this.letter,this.x+0.45*BOX_WIDTH, this.y + .87 * BOX_HEIGHT); 
    }
    move(from, to){
        this.x = this.x + (to[0]-from[0])/DELAY;
        this.y = this.y + (to[1]-from[1])/DELAY;

    }
    open() {
        this.isOpen = true;
        updateOffer(this.value);
    }


}
function reset() {
    boxOrder = shuffleNumbers(0,9);
    for(let i=0; i<10 ; i++){
        box[i] = new Box(INIT_POS[i][0], INIT_POS[i][1], GAME_POS[i][0], GAME_POS[i][1], BOX_VALUES[boxOrder[i]], String.fromCharCode(65+i));
        box[i].draw();
    }
    populateValues();
}
function shuffleNumbers(from,to) {
    let tempNums = [];
    let returnNums = [];
    for(let i=from; i<=to; i++) {
        tempNums.push(i);
    }
    for(let i=0; i<10; i++) {
        let nextNumPos = Math.floor(Math.random()*tempNums.length);
        returnNums.push(tempNums[nextNumPos]);
        tempNums.splice(nextNumPos,1);
    }
    return(returnNums);
}


function relocateAnimation() {

    for(let i=9; i>selection; i--) {
        box[i].gameX = box[i-1].gameX;
        box[i].gameY = box[i-1].gameY;
        
    }
        box[selection].gameX = BOX_WIDTH*3.8;
    box[selection].gameY = BOX_HEIGHT*3.8;
    count = 0;
    requestAnimationFrame(relocate);
}
    
function relocate(){
    count++;
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    for(let j=0;j<box.length; j++){
        box[j].move(INIT_POS[j], [box[j].gameX,box[j].gameY]);
        box[j].draw();
    }
    if(count < DELAY) requestAnimationFrame(relocate);
}
function button() {
    if (turn == 0) {
        playerBox = selection;
        relocateAnimation();
        turn++;
    }
    else if (turn >0 && turn <9 && box[selection].isOpen == false && selection != playerBox) {
        box[selection].open();
        box[selection].draw();

        turn++;
    }
    
}

function buttonOpt() {
    selection = 0;
    if (turn == 0) relocateAnimation();
}

function updateOffer(value) {
    let index = valuesInPlay.indexOf(value);
    valuesInPlay.splice(index, 1);
    let index2 = Math.floor(valuesInPlay.length/2);
    offer = Math.floor((valuesInPlay[index2]+valuesInPlay[index2 + 1])/2);
    console.log(offer);

}

reset();
