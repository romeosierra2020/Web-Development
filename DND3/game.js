
export default class Game {
    constructor() {
        this.gameStatus = 'Initialise';
        this.statusMessage = '';
        this.gameTurn = 0;
        this.actionMessage = '';
        this.offer = 0;
        this.offerStr = '';
        this.offerMessage = '';
        this.dealtAt = 0;
        this.dealtAtStr = '';
        this.dealtAtMessage = '';
        this.playerSelection = 10;
        this.inputSelection = '';
        this.buttonPressed = 0;
        this.GAME_BOARD = document.getElementById("game_board");
        this.ctx = this.GAME_BOARD.getContext('2d');
        this.GAME_HEIGHT = Math.floor(window.innerHeight * .65);
        this.GAME_WIDTH = Math.floor(window.innerWidth * .65);
        this.BOX_HEIGHT = Math.floor(this.GAME_HEIGHT/5);
        this.BOX_WIDTH = Math.floor(this.GAME_WIDTH/5);
        this.DELAY = 75;
        this.count = 0;
    }
    initialise() {
        this.gameStatus = 'BoxSelect';
        this.statusMessage = '';
        this.gameTurn = 0;
        this.actionMessage = '';
        this.offer = 0;
        this.offerStr = '';
        this.offerMessage = '';
        this.dealtAt = 0;
        this.dealtAtStr = '';
        this.dealtAtMessage = '';
        this.playerSelection = 10;
        this.inputSelection = '';
        this.buttonPressed = -1;
        this.optionText = '';
        this.GAME_BOARD = document.getElementById("game_board");
        this.GAME_HEIGHT = this.GAME_BOARD.height;
        this.GAME_WIDTH = this.GAME_BOARD.width;
        this.BOX_HEIGHT = this.GAME_HEIGHT/5;
        this.BOX_WIDTH = this.GAME_WIDTH/5;
        this.DELAY = 75;
        this.count = 0;        
    }
    shuffleNumbers(from,to) {
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
        return returnNums;
    }
    update() { //TODO include option button text
        if(this.gameStatus === 'BoxSelect') {
            this.statusMessage = 'Box Selection';
            this.actionMessage = 'Please select your Box';
        } else if(this.gameStatus === 'InPlay') {
            this.statusMessage = 'Current Offer:';
            this.offerStr = this.offer.toString();
            if(this.dealtAt !== 0){
                this.actionMessage = 'Select Box to Open or Deal';
            } else {
                this.actionMessage = 'Select Box to Open';
                this.dealtAtMessage = 'Dealt at: ';
                this.dealtAtStr = this.dealtAt.toString();
            }
        } else if(this.gameStatus === 'swapTurn') {
            this.statusMessage = 'Keep or Swap?';
            this.offerStr = '\n';
            this.actionMessage = 'Select box to Open or Swap';
            if(this.dealtAt === 0){
                this.dealtAtMessage = 'Dealt at: ';
                this.dealtAtStr = this.dealtAt.toString();
            }
        } else {
            this.statusMessage = 'Game Over';
            this.offerStr = '\n';
            this.actionMessage = 'Select New Game to start';
            if(this.dealtAt === 0){
                this.dealtAtMessage = 'Dealt at: ';
                this.dealtAtStr = this.dealtAt.toString();
            }            
        }
    }
    draw(display) {
        display.statusMessage.innerHTML = this.statusMessage;
        display.statusValue.innerHTML = this.offerStr;
        display.actionMessage.innerHTML = this.actionMessage;
        display.dealtMessage.innerHTML = this.dealtAtMessage;
        display.dealtValue.innerHTML = this.dealtAtStr;
    }

    takeTurn(boxArray) {
    switch(this.gameStatus) {
            case 'Initialise':
                //initialiseGame();
                break;
            case 'BoxSelect':
                this.boxSelection(boxArray);
                break;
            case 'swapTurn': 
                //this.boxSwap();
                break;
            case 'GameOver':
                //this.gameOver();
                break;
            default:
                //this.takeTurn;
                break;
        }
        this.buttonPressed = -1;
    }
    boxSelection(boxArray) {

        if(this.buttonPressed<10){
            for(let i = boxArray.length-2; i>this.buttonPressed; i--) {
                boxArray[i+1].gamePosX = boxArray[i].gamePosX;
                boxArray[i+1].gamePosY = boxArray[i].gamePosY;
            }
            boxArray[this.buttonPressed].gamePosX = this.BOX_WIDTH * 3.8;
            boxArray[this.buttonPressed].gamePosY = this.BOX_HEIGHT*3.8;            
            for(let i = 0; i<boxArray.length; i++) {

                    boxArray[i].dx = (boxArray[i].gamePosX - boxArray[i].posX)/this.DELAY;
                    boxArray[i].dy = (boxArray[i].gamePosY - boxArray[i].posY)/this.DELAY; 

            }


            
        }
        this.buttonPressed=-1;
    }
}