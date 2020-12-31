const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const GAME_HEIGHT = canvas.clientHeight;
const GAME_WIDTH = canvas.clientWidth;

class 






function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    ctx.fillStyle = '#008000';
    ctx.fillRect(0,0,GAME_WIDTH, GAME_HEIGHT);


    
}

gameLoop();