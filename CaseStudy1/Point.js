var pArray = [];
let gameFrame = 0;
let gameOver = false;
let gameScore = 0;
let Status = false;
let Blood = new Image();
Blood.src ='blood.png';
let height_score = 0;

class Point {
    x;
    y;
    width;
    height;

    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * 6) * 40;
        this.radius = 20 * Math.sqrt(2);
        this.speed = 3;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        ctx.drawImage(Blood,0,0,498,501,this.x,this.y,this.width,this.height);
    }

    check() {
        this.x -= this.speed;
        let distanceX = this.x - 80;
        let distanceY = this.y - (canvas.height - player.y_vertical);
        this.distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        let distancex = this.x - 80;
        let distancey = this.y - (canvas.height - player.y_vertical + player.height);
        this.distancefoot = Math.sqrt(distancex * distancex + distancey * distancey);
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
        } else if( pArray[i].distance < pArray[i].radius + player.radius || pArray[i].distancefoot < pArray[i].radius + player.radius ){
            gameScore++;
            if(player.hp < 8) player.hp += 2;
            else if (player.hp == 9) player.hp++;
            pArray.splice(i,1);
            i--;
            if(gameScore > height_score) height_score = gameScore;
            score();
        }
    }

}
function score(){
    document.getElementById("checking_score").innerHTML = "Point : " + gameScore + " Height score : " + height_score;
}
score();
