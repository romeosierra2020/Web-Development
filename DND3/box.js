import { game } from './dndinit.js';
export default class Box {
    constructor(label, posX, posY, gamePosX, gamePosY, value) {
        this.label = label;
        this.posX = Math.floor(posX);
        this.posY = Math.floor(posY);
        this.startPosX = Math.floor(posX);
        this.startPosY = Math.floor(posY);
        this.gamePosX = Math.floor(gamePosX);
        this.gamePosY = Math.floor(gamePosY);
        this.swapPosX = Math.floor(gamePosX);
        this.swapPosY = Math.floor(gamePosY);
        this.dx = 0;
        this.dy = 0;
        this.value = value;
        this.isOpen = true;
        this.animation = true;
    }
    draw(game,values,display) {
        if(this.isOpen == true) {
            this.renderOpenBox(game, values, display);
        }
        this.renderBox(game, values, display)
    }
    renderBox(game, values, display) {
        game.ctx.beginPath();
        game.ctx.moveTo(this.posX,this.posY+(0.55*game.BOX_HEIGHT));
        game.ctx.lineTo(this.posX + game.BOX_WIDTH, this.posY+(0.55*game.BOX_HEIGHT));
        game.ctx.strokeStyle = display.COLOR_ACCENT1
        game.ctx.stroke();
        game.ctx.fillStyle = display.COLOR_BOX;
        game.ctx.fillRect(this.posX,this.posY+(0.45*game.BOX_HEIGHT), game.BOX_WIDTH, (game.BOX_HEIGHT/10));
        game.ctx.fillRect(this.posX, this.posY + (.56*game.BOX_HEIGHT), game.BOX_WIDTH, (game.BOX_HEIGHT*.45));
        game.ctx.fillStyle = display.COLOR_GAME_BOARD;
        game.ctx.fillRect(this.posX+(0.3*game.BOX_WIDTH), this.posY + (0.60 * game.BOX_HEIGHT), (game.BOX_WIDTH*0.4), (game.BOX_HEIGHT*0.35));
        game.ctx.strokeStyle = display.COLOR_TEXT;
        game.ctx.strokeRect(this.posX+(0.33*game.BOX_WIDTH), this.posY + (.63 * game.BOX_HEIGHT), (game.BOX_WIDTH*.34), (game.BOX_HEIGHT*.29));
        game.ctx.font = (game.BOX_HEIGHT*0.25).toString() +"px trebuchet MS";
        game.ctx.fillStyle = display.COLOR_TEXT;
        game.ctx.fillText(this.label, this.posX+(0.45*game.BOX_WIDTH), this.posY + (.87 * game.BOX_HEIGHT));
    }
    renderOpenBox(game,values, display) {
        
        game.ctx.fillStyle = display.COLOR_BOX;
        game.ctx.fillRect(this.posX, this.posY, game.BOX_WIDTH, game.BOX_HEIGHT*0.45);
        game.ctx.fillStyle = display.COLOR_GAME_BOARD;
        game.ctx.fillRect(this.posX+0.05*game.BOX_WIDTH, this.posY + 0.05 * game.BOX_HEIGHT, game.BOX_WIDTH*0.9, game.BOX_HEIGHT*0.35);
        game.ctx.strokeStyle = display.COLOR_TEXT;
        game.ctx.strokeRect(this.posX + 0.08*game.BOX_WIDTH, this.posY + 0.08 * game.BOX_HEIGHT, game.BOX_WIDTH*.84, game.BOX_HEIGHT*.29);
        game.ctx.font = (game.BOX_HEIGHT*0.25).toString() +"px trebuchet MS";
        game.ctx.fillStyle = display.COLOR_TEXT;
        game.ctx.textAlign = 'Center';
        game.ctx.fillText(values.values[this.value][3],this.posX+0.2*game.BOX_WIDTH, this.posY + .3 * game.BOX_HEIGHT); 
    }
    update() {

            this.posX += this.dx;
            this.posY += this.dy;
            if(this.posY >= this.gamePosY){
                this.dy = 0; 
            }
            if(this.posX = this.gamePosX) {
                this.dx = 0;
            }


    }
}