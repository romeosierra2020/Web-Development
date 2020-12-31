import Box from './box.js';
import {display, game, box, values, gameLoop, INIT_POS, GAME_POS} from './dndinit.js';
export default class Game {
    constructor() {
        this.gameStatus = 'Play';
        this.statusMessage = '';
        this.gameTurn = 0;
        this.actionMessage = '';
        this.offer = 0;
        this.offerStr = '';
        this.offerMessage = '';
        this.dealtAt = 0;
        this.dealtAtStr = '';
        this.dealtAtMessage = '';
        this.optionBtnText = '';
        this.playerSelection = 10;
        this.inputSelection = '';
        this.buttonPressed = 0;
        this.playerBox = 0;
        this.boxToSwap = 0;
        this.finalScore = 0;
        this.GAME_BOARD = document.getElementById("game_board");
        this.GAME_HEIGHT = window.innerHeight / 1.5;
        this.GAME_WIDTH = window.innerWidth *.69;
        this.GAME_BOARD.width = this.GAME_WIDTH;
        this.GAME_BOARD.height = this.GAME_HEIGHT;
        this.BOX_HEIGHT = this.GAME_HEIGHT/5;
        this.BOX_WIDTH = this.GAME_WIDTH/5;
        this.DELAY = 75;
        this.count = 0;

    }
    
    inputReaction(box, display) {
        switch(this.inputSelection) {
            case 'btnOpt':
                this.buttonPressed = 10;
                break;
            default :
                this.buttonPressed = this.inputSelection.charCodeAt(3)-65;
                break;
        }
        this.takeTurn(box, display);
    }
    
    reset() {
        this.gameStatus = 'Play';
        this.statusMessage = '';
        this.gameTurn = 0;
        this.actionMessage = '';
        this.offer = 0;
        this.offerStr = '';
        this.offerMessage = '';
        this.dealtAt = 0;
        this.dealtAtStr = '';
        this.dealtAtMessage = '';
        this.optionBtnText = '';
        this.playerSelection = 10;
        this.inputSelection = '';
        this.buttonPressed = 0;
        this.playerBox = 0;
        this.boxToSwap = 0;
        this.finalScore = 0;
        this.GAME_BOARD = document.getElementById("game_board");
        this.GAME_HEIGHT = window.innerHeight / 1.5;
        this.GAME_WIDTH = window.innerWidth *.69;
        this.GAME_BOARD.width = this.GAME_WIDTH;
        this.GAME_BOARD.height = this.GAME_HEIGHT;
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

        takeTurn(box,display) {
            if(this.buttonPressed !== 10) {
                switch(this.gameTurn) {
                    case 0:
                        this.playerBoxSelection(box);
                        break;
                    case 1:
                        this.optionBtnText = 'DEAL';
                        display.renderValue(this.optionBtnText, 'btnOpt');
                        this.actionMessage = 'Select a box to open or Deal.';
                        display.renderValue(this.actionMessage, 'action_message');
                        
                        this.playerBoxOpen(box, display);
                        break;
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        this.playerBoxOpen(box,display);
                        break;
                    case 8:
                        this.optionBtnText = 'SWAP';
                        display.renderValue(this.optionBtnText, 'btnOpt');
                        this.offerMessage = ' ';
                        this.offerStr = ' ';
                        display.renderValue(this.offerMessage, 'status_message');
                        display.renderValue(this.offerStr, 'status_value');
                        this.actionMessage = 'Select a box to open or Swap.';
                        display.renderValue(this.actionMessage, 'action_message');
                        this.playerBoxOpen(box,display);

                        break;
                    case 9:   
                        this.playerBoxOpen(box, display);
                        if(this.dealtAt === 0) {
                            this.finalScore = values.values[box[this.playerSelection].value][0];
                        } else {
                            this.finalScore = this.dealtAt;
                        }                        
                        for(let i = 0; i< box.length; i++) {
                            if(box[i].isOpen ===false){
                                this.buttonPressed = i;
                                this.playerSelection = 10;
                                this.playerBoxOpen(box, display); 
                            }
                        }
                        this.statusMessage = 'Game Over!';
                        this.actionMessage = 'Hit Start for new game.';
                        this.dealtAtMessage = 'Final Score:'
                        this.dealtAtStr = this.convertToString(this.finalScore);
                        this.optionBtnText = 'Start';
                        display.renderValue(this.statusMessage, 'status_message');
                        display.renderValue(this.actionMessage, 'action_message');
                        display.renderValue(this.dealtAtMessage, 'dealt_message');
                        display.renderValue(this.dealtAtStr, 'dealt_value');  
                        display.renderValue(this.optionBtnText, 'btnOpt');    
                        this.gameStatus = 'GameOver'; 
                        this.gameTurn ++;   
                                      
                        break;
                    default:

                        
                        break;
                }

            } else {
                switch(this.gameTurn) {
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        this.deal();
                        break;
                    case 9:
                        this.swap();
                        break;
                    default:
                        box = this.newGame(box);
                        console.log(box);
                }
                //turn 2 to 9 deal
                //turn9 swap
                //reset
            }
        }



        playerBoxSelection(box) {
            if(this.buttonPressed < 10) {
                for(let i = 9; i > this.buttonPressed; i--) {
                    box[i].gamePosX = box[i-1].gamePosX;
                    box[i].gamePosY = box[i-1].gamePosY;
                }
                box[this.buttonPressed].gamePosX = this.BOX_WIDTH*3.8;
                box[this.buttonPressed].gamePosY = this.BOX_HEIGHT*3.8
                game.count = 0;
                requestAnimationFrame(display.relocate);
                this.playerBox = this.buttonPressed;
                this.playerSelection = this.buttonPressed;
                this.gameTurn++;
                this.status_message = '';
                display.renderValue(this.status_message, 'status_message');
                this.actionMessage = 'Select a box to open.';
                display.renderValue(this.actionMessage, 'action_message');
            }
        }


        playerBoxOpen(box,display) {
            if(this.buttonPressed < 10 
                && box[this.buttonPressed].isOpen === false
                && this.buttonPressed !== this.playerSelection) {
                box[this.buttonPressed].isOpen = true;
                box[this.buttonPressed].draw(display, game, values);
                values.updateValuesInPlay(box[this.buttonPressed]);
                values.display(display);
                this.updateOffer();
                this.gameTurn ++;



            }
        }

        offerSwap() {
            console.log('offer swap')

        }

        updateOffer() {
            if(this.gameTurn<8) {
                this.offer = values.leftInPlay() * (1.4 - this.gameTurn * 0.1);
                this.offer = this.offer.toFixed(0);
                this.offerStr = this.convertToString(this.offer);
                this.offerMessage = 'Current Offer:';
                this.updateOfferMessage();
            }


        }
        updateOfferMessage() {
            display.renderValue(this.offerMessage, 'status_message');
            display.renderValue(this.offerStr, 'status_value');

        }
        deal(){
            if(this.dealtAt == 0){
                this.dealtAt = this.offer;
                this.dealtAtMessage='Dealt At: ';
                this.dealtAtStr = this.dealtAt.toString();
                this.actionMessage = 'Select a box to open.';
                display.renderValue(this.actionMessage, 'action_message');
                display.renderValue(this.dealtAtMessage, 'dealt_message');
                display.renderValue('£' + this.dealtAtStr, 'dealt_value');
            }
        }
        swap() {
            for(let i = 0; i< box.length; i++) {
                if(box[i].isOpen ===false && i !== this.playerSelection){
                    this.boxToSwap = i;
                }
            }
            this.count = 0;
            for(let i = 0; i<box.length; i++) {
                box[i].startPosX = box[i].posX;
                box[i].startPosY = box[i].posY;
                if(i !== this.playerSelection && i !== this.boxToSwap) {
                    box[i].gamePosX = box[i].posX;
                    box[i].gamePosY = box[i].posY;

                }

            }
            box[this.playerSelection].gamePosX = box[this.boxToSwap].gamePosX;
            box[this.playerSelection].gamePosY = box[this.boxToSwap].gamePosY;
            box[this.boxToSwap].gamePosX = this.BOX_WIDTH * 3.8;
            box[this.boxToSwap].gamePosY = this.BOX_HEIGHT * 3.8;
            requestAnimationFrame(display.relocate);
            this.playerSelection = this.boxToSwap;
        }
        convertToString(value) {
            console.log(value);
            if(value < 1) {
                return '1p';
            } else if(value < 1000) {
                return ('£' + value.toString());
            } else if(value < 10000) {
                return ( '£' + value.toString().slice(0,1) + ',' + value.toString().slice(1,4));
            } else {
                return ( '£' + value.toString().slice(0,2) + ',' + value.toString().slice(2,5));
            }

        }
        newGame(box) {
            game.reset();
            display.reset(game);
            values.reset();
            values.display(display);

            // shuffle box values
            
            let shuffledNumbers = game.shuffleNumbers(0,9);
            for(let i=0; i<10 ; i++){
                box[i].reset(String.fromCharCode(65+i), INIT_POS[i][0], INIT_POS[i][1], GAME_POS[i][0], GAME_POS[i][1], shuffledNumbers[i]);
                box[i].draw(display, game, values);

            }
            display.renderMessages(game);
            game.gameStatus = 'In Play';
            return(box);
        }

}
/*



    function updateGameStatus() {

    }

    function updateStatusMessage() {

    }

    function  updateActionMessage() {
        
    }

    /
}
*/