var cnvArray = [];
let arrow = new Image();
arrow.src = 'arrow.png';
class cnv {
    x;
    y;
    width;
    height;

    constructor() {
        this.x = canvas.width;
        this.y = Math.floor(Math.random() * 6) * 30;
        this.radius = 5;
        this.speed = 3;
        this.width = 40;
        this.height = 40;
    }

    draw() {
        ctx.drawImage(arrow,140,200,300,130,this.x, this.y, 30, 13);
    }
    check(){
        this.x -= this.speed;
        let distanceX = this.x - 80;
        let distanceY = this.y - (canvas.height - player.y_vertical);
        this.distancehead = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        if(this.distancehead < this.radius+ player.radius) {
            player.hp = 0;
            gameOver = true;
        }
        let distancex = this.x - 80;
        let distancey = this.y - (canvas.height - player.y_vertical + player.height);
        this.distancefoot = Math.sqrt(distancex * distancex + distancey * distancey);
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
        else if(cnvArray[i].distancefoot < cnvArray[i].radius + player.radius + 30){
            player.hp -= 3;
            cnvArray.splice(i, 1);
            i--;
        }

    }
}
