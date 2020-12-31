import Game from './game.js';
import InputHandler from './dndinput.js';
import Display from './dnddisp.js';
import Box from './box.js';
import Values from './values.js';
export const game = new Game();
game.ctx.canvas.width = game.GAME_WIDTH;
game.ctx.canvas.height = game.GAME_HEIGHT;
const inputHandler = new InputHandler();
export const display = new Display();
export const values = new Values();
console.log(game.BOX_WIDTH, game.BOX_HEIGHT);
const INIT_POS = [[game.BOX_WIDTH*2, game.BOX_HEIGHT*0.2],
                   [game.BOX_WIDTH*1.4, game.BOX_HEIGHT*1.4],
                   [game.BOX_WIDTH*2.6, game.BOX_HEIGHT*1.4],
                   [game.BOX_WIDTH*0.8, game.BOX_HEIGHT*2.6],
                   [game.BOX_WIDTH*2, game.BOX_HEIGHT*2.6],
                   [game.BOX_WIDTH*3.2, game.BOX_HEIGHT*2.6],
                   [game.BOX_WIDTH*0.2, game.BOX_HEIGHT*3.8],
                   [game.BOX_WIDTH*1.4, game.BOX_HEIGHT*3.8],
                   [game.BOX_WIDTH*2.6, game.BOX_HEIGHT*3.8],
                   [game.BOX_WIDTH*3.8, game.BOX_HEIGHT*3.8]];

const GAME_POS = [[game.BOX_WIDTH*0.2, game.BOX_HEIGHT*1.4],
                   [game.BOX_WIDTH*1.4, game.BOX_HEIGHT*1.4],
                   [game.BOX_WIDTH*2.6, game.BOX_HEIGHT*1.4],
                   [game.BOX_WIDTH*0.2, game.BOX_HEIGHT*2.6],
                   [game.BOX_WIDTH*1.4, game.BOX_HEIGHT*2.6],
                   [game.BOX_WIDTH*2.6, game.BOX_HEIGHT*2.6],
                   [game.BOX_WIDTH*0.2, game.BOX_HEIGHT*3.8],
                   [game.BOX_WIDTH*1.4, game.BOX_HEIGHT*3.8],
                   [game.BOX_WIDTH*2.6, game.BOX_HEIGHT*3.8],
                   [game.BOX_WIDTH*3.8, game.BOX_HEIGHT*3.8]];
const BOX_QTY = 10;
let boxArray = [];


// Game Loop

function gameLoop() {
    switch(game.gameStatus) {
        case 'Initialise':
            initialiseGame();
            break;
        case 'BoxSelect':
            if(game.buttonPressed !==-1) {
                game.takeTurn(boxArray);
            }
            break;
        case 'swapTurn': 
            //console.log('Swap Turn');
            break;
        case 'GameOver':
            //console.log('GameOver');
            break;
        default:
            //console.log('In Play');
            break;
    }
    //Updates
    game.update();

    //Draws
    game.ctx.clearRect(0,0,game.GAME_WIDTH,game.GAME_HEIGHT);
    for(let i = 0; i< boxArray.length; i++) {
        if((boxArray[i].dx !== 0 || boxArray[i].dy !== 0)){
            boxArray[i].update();
            }
        boxArray[i].draw(game,values,display);
    }
    values.draw();
    game.draw(display);

    requestAnimationFrame(gameLoop);
    function initialiseGame() {
        game.initialise();
        display.initialise();
        values.initialise();
        boxArray = [];
        let shuffledNumbers = game.shuffleNumbers(0,9);
        for(let i = 0; i < BOX_QTY; i++) {
            let label = String.fromCharCode(65+i);
            let posX = INIT_POS[i][0];
            let posY = INIT_POS[i][1];
            let gamePosX = GAME_POS[i][0];
            let gamePosY = GAME_POS[i][1];
            boxArray.push(new Box(label, posX, posY, gamePosX, gamePosY, shuffledNumbers[i]));
        }
    }
}


requestAnimationFrame(gameLoop);