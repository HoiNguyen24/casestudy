var cnvArray = [];

class cnv {
    x;
    y;
    width;
    height;

    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * 6) * 30;
        this.radius = 20 * Math.sqrt(2);
        this.speed = 5;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        ctx.fillStyle = 'black';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    check(){
        this.x -= this.speed;
        let distanceX = this.x - 80;
        let distanceY = this.y - (canvas.height - player.y_vertical);
        this.distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        if(this.distance < this.radius+ player.radius){
            gameOver = true;
            const point = gameScore;
        }
    }
}
function createcnv() {
    if (gameFrame % 130 == 0) {
        cnvArray.push(new cnv(  ));
    }
    for (let i = 0; i < cnvArray.length; i++) {
        cnvArray[i].check();
        cnvArray[i].draw();
        if (cnvArray[i].y < cnvArray[i].radius) {
            cnvArray.splice(i, 1);
            i--;
        }
    }

}
