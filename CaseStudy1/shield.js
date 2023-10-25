class shield{
    statusShield;
    radius;
    health;
    constructor() {
        this.health = 0;
        this.statusShield = false;
        this.radius = 0;
    }
    draw(){
        ctx.beginPath();
        ctx.strokeStyle ='red';
        ctx.arc(player.x+70,canvas.height-player.y_vertical+1/2*player.height,player.height / 2,-1/2*Math.PI,1/2*Math.PI);
        ctx.stroke();
    }
    check(){
        if(gameScore%5 == 0 && gameScore != 0){
            this.statusShield = true;
            this.health = 2;
            this.radius = 20;
        }
    }
}