var pArray = [];
let gameFrame = 0;
let gameOver = false;
let gameScore = 0;
class Point {
    x;
    y;
    width;
    height;

    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * 6) * 40;
        this.radius = 20 * Math.sqrt(2);
        this.speed = 5;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    check() {
        this.x -= this.speed;
        let distanceX = this.x - 80;
        let distanceY = this.y - (canvas.height - player.y_vertical);
        this.distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    }
}
function createPoint() {
    if (gameFrame % 100 == 0) {
        pArray.push(new Point());
    }
    for (let i = 0; i < pArray.length; i++) {
        pArray[i].check();
        pArray[i].draw();
        if (pArray[i].y < pArray[i].radius) {
            pArray.splice(i, 1);
            i--;
        } else if( pArray[i].distance < pArray[i].radius + player.radius){
            gameScore++;
            pArray.splice(i,1);
            i--;
            score();
        }
    }

}
function score(){
    document.getElementById("checking_score").innerHTML = "point :" + gameScore;
}
score();
