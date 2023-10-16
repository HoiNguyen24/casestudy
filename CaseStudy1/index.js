let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 300;
let run = new Image();
run.src = 'Run.png';
let jump = new Image();
jump.src = 'Jump.png';
class object1 {
    speed;
    x;
    y;
    width;
    height;
    X;
    frame;
    y_vertical;
    radius;
    constructor(){
        this.speed = 10;
        this.x = 40;
        this.y = 128-75;
        this.width = 35;
        this.height = 75;
        this.X = 0;
        this.frame = 0;
        this.y_vertical = 75;
        this.radius = 15;
    }
    draw() {
        ctx.drawImage(run,this.x + this.X*128,this.y,this.width,this.height,80,canvas.height-this.y_vertical,this.width,this.height);
    }
    check(){
        if(gameFrame % 8 == 0 ){
            this.frame++;
            if(this.frame >= 6)
                this.frame = 0;
            if(this.frame == 5)
                this.X = 0;
            else
                this.X++;
        }
    }
    delete(){
          ctx.clearRect(0, 0,canvas.width,canvas.height);
    }
    moveTop(){
        if(canvas.height-this.y_vertical == 5) this.y_vertical += 0;
            else  this.y_vertical += this.speed;
    }
    moveDown(){
        if(canvas.height-this.y_vertical == (canvas.height-this.height)) this.y_vertical -= 0;
       else this.y_vertical -= this.speed;
    }

}
let player = new object1();
