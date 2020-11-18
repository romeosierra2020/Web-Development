export default class Box {
    constructor(x,y,gameX, gameY,value,letter) {
        this.x = x;
        this.y = y;
        this.gameX = gameX;
        this.gameY = gameY;
        this.letter = letter;
        this.isopen = false;
        this.value = value;
    }
    
    draw(ctx){
        if(this.isOpen == true) {
            //draw open box
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


}