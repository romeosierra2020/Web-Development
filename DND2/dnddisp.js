
import {game, display, box, values} from './dndinit.js';
export default class Display {
    constructor(game) {
        this.ctx = game.GAME_BOARD.getContext("2d");
        this.STATUS_MSG = document.getElementById("status_message");
        this.STATUS_VAL = document.getElementById("status_value");
        this.ACTION_MSG = document.getElementById("action_message");
        this.DEALT_MSG = document.getElementById("dealt_message");
        this.DEALT_VAL = document.getElementById("dealt_value");
        this.OPTION_BTN = document.getElementById("btnOpt");
        this.COLOR_ACCENT1 = "#EF233C";
        this.COLOR_ACCENT2 = "#8D99A";
        this.COLOR_BOX = "#D90429";
        this.COLOR_GAME_BOARD = "#EDF2F4";
        this.COLOR_TEXT = "#2B2D42";
        this.DELAY = 75;
    }

    renderValue(value, element) {
        document.getElementById(element).innerHTML = value;
    }

    renderOpenBox(box,game,values) {
        
        this.ctx.fillStyle = this.COLOR_BOX;
        this.ctx.fillRect(box.posX, box.posY, game.BOX_WIDTH, game.BOX_HEIGHT*0.45);
        this.ctx.fillStyle = this.COLOR_GAME_BOARD;
        this.ctx.fillRect(box.posX+0.05*game.BOX_WIDTH, box.posY + 0.05 * game.BOX_HEIGHT, game.BOX_WIDTH*0.9, game.BOX_HEIGHT*0.35);
        this.ctx.strokeStyle = this.COLOR_TEXT;
        this.ctx.strokeRect(box.posX + 0.08*game.BOX_WIDTH, box.posY + 0.08 * game.BOX_HEIGHT, game.BOX_WIDTH*.84, game.BOX_HEIGHT*.29);
        this.ctx.font = (game.BOX_HEIGHT*0.25).toString() +"px trebuchet MS";
        this.ctx.fillStyle = this.COLOR_TEXT;
        this.ctx.textAlign = 'Center';
        this.ctx.fillText(values.values[box.value][3],box.posX+0.2*game.BOX_WIDTH, box.posY + .3 * game.BOX_HEIGHT); 
    }

    renderBox(box,game) {
        this.ctx.beginPath();
        this.ctx.moveTo(box.posX,box.posY+(0.55*game.BOX_HEIGHT));
        this.ctx.lineTo(box.posX + game.BOX_WIDTH, box.posY+(0.55*game.BOX_HEIGHT));
        this.ctx.strokeStyle = this.COLOR_ACCENT1
        this.ctx.stroke();
        this.ctx.fillStyle = this.COLOR_BOX;
        this.ctx.fillRect(box.posX,box.posY+(0.45*game.BOX_HEIGHT), game.BOX_WIDTH, game.BOX_HEIGHT/10);
        this.ctx.fillRect(box.posX, box.posY + .56*game.BOX_HEIGHT, game.BOX_WIDTH, game.BOX_HEIGHT*.45);
        this.ctx.fillStyle = this.COLOR_GAME_BOARD;
        this.ctx.fillRect(box.posX+0.3*game.BOX_WIDTH, box.posY + 0.60 * game.BOX_HEIGHT, game.BOX_WIDTH*0.4, game.BOX_HEIGHT*0.35);
        this.ctx.strokeStyle = this.COLOR_TEXT;
        this.ctx.strokeRect(box.posX+0.33*game.BOX_WIDTH, box.posY + .63 * game.BOX_HEIGHT, game.BOX_WIDTH*.34, game.BOX_HEIGHT*.29);
        this.ctx.font = (game.BOX_HEIGHT*0.25).toString() +"px trebuchet MS";
        this.ctx.fillStyle = this.COLOR_TEXT;
        this.ctx.fillText(box.label, box.posX+0.45*game.BOX_WIDTH, box.posY + .87 * game.BOX_HEIGHT);
    }
    reset(game) {
        this.ctx.fillStyle = this.COLOR_GAME_BOARD;
        this.ctx.fillRect(0,0,game.GAME_WIDTH, game.GAME_HEIGHT);
    }
    
    renderMessages(game) {
        this.STATUS_MSG.innerHTML = game.statusMessage;
        this.STATUS_VAL.innerHTML = game.offerStr;
        this.ACTION_MSG.innerHTML = game.actionMessage;
        this.DEALT_MSG.innerHTML = game.dealtAtMessage;
        this.DEALT_VAL.innerHTML = game.dealtAtStr;
        this.OPTION_BTN.innerHTML = game.optionBtnText;
    }

    relocate(){
        game.count +=1;
        display.ctx.fillStyle = display.COLOR_GAME_BOARD;
        display.ctx.fillRect(0,0,game.GAME_WIDTH, game.GAME_HEIGHT);
        for(let j=0;j<box.length; j++){
            box[j].move([box[j].startPosX,box[j].startPosY], [box[j].gamePosX,box[j].gamePosY], game);
            box[j].draw(display,game,values);
        }
        if(game.count < game.DELAY) requestAnimationFrame(display.relocate);
    }


}