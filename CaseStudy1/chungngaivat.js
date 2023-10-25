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
        let distancex = this.x - 80;
        let distancey = this.y - (canvas.height - player.y_vertical + player.height);
        this.distancefoot = Math.sqrt(distancex * distancex + distancey * distancey);
        let distancexx = this.x -80;
        let distanceyy = this.y - (canvas.height - player.y_vertical + player.height* 1/2);
        this.distancebody = Math.sqrt(distancexx**2 + distanceyy**2);
    }
}
let timeline  = 130;
let i = 1;
function createcnv() {
    if (gameScore > 10 * i && timeline > 70) {
        timeline -= 20;
        i++;
    }
    if (gameFrame % timeline == 0) {
        cnvArray.push(new cnv());
    }
    for (let i = 0; i < cnvArray.length; i++) {
        cnvArray[i].check();
        cnvArray[i].draw();
        if (cnvArray[i].y < cnvArray[i].radius) {
            cnvArray.splice(i, 1);
            i--;
        }
        else if(cnvArray[i].distancebody < cnvArray[i].radius + player.radius+5){
            player.hp -= 3;
            if (shield1.statusShield == true) {
                player.hp += 3;
                shield1.statusShield = false;
                shield1.radius = 0;
            }
            cnvArray.splice(i, 1);
            i--;
        }
        else if (cnvArray[i].distancefoot < cnvArray[i].radius + player.radius-10) {
            player.hp -= 3;
            if (shield1.statusShield == true) {
                player.hp += 3;
                shield1.statusShield = false;
                shield1.radius = 0;
            }
            cnvArray.splice(i, 1);
            i--;
        } else if (cnvArray[i].distancehead < cnvArray[i].radius + player.radius + shield1.radius - 5) {
            if (shield1.statusShield == true) {
                shield1.statusShield = false;
                shield1.radius = 0;
                cnvArray.splice(i, 1);
                i--;
            } else {
                gameOver = true;
                player.hp = 0;
                cnvArray.splice(i, 1);
                i--;
            }
        }
    }
}
