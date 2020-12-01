import { detectCollision } from "./collisionDetection.js";

export default class Ball {
  constructor(game) {
    this.game = game;
    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;
    this.image = document.getElementById("img_ball");
    this.size = 16;
    this.reset();
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

  }

  reset() {
    this.position = {x:10, y:200};
    this.speed= {x:4, y:-2};
  }

  update(deltaTime) {

    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

// check collision with wall

    if(this.position.x > this.gameWidth - this.size 
        || this.position.x < 0) {
          this.speed.x = -this.speed.x;
        }

// check collision with top or bottom

    if(this.position.y < 0 ) {
      this.speed.y = -this.speed.y;
      }  

    if(this.position.y > this.gameHeight - this.size) {
      this.game.lives--;
      this.reset();
      }



    if(detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
