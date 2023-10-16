const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
canvas.width = 1000;
canvas.height = 300;

var Vampire1 = new Image();
Vampire1.src = "Idle.png";
var Run = new Image();
Run.src = "Run.png";
class Object1{
    x;
    y;
    hp;
    mp;
    damage;
    orientation;
    height;
    width;
    X;
    radius;
    constructor(){
        this.x = 10;
        this.y = 10 ;
        this.orientation = ORIENTATION_RIGHT;
        this.hp = 100;
        this.mp = 50;
        this.X = 0;
        this.damage = 10;
        this.height = 90;
        this.width = 35;
        this.darius = 25;
    }
    moveRight(){
        this.x += 5;
    }
    moveLeft(){
        this.x -= 5;
    }
    jump(){
        this.y -= 5;
        this.x += 10;
    }
    Stand() {
     ctx.drawImage(Vampire1,40,45,this.width,this.height,this.x,canvas.height-this.height,this.width,this.height);
    }
    Run(){
        let cx = 45;
        let cy = 45;
               this.moveRight();
               ctx.drawImage(Run,cx+this.width+95,cy,this.width,this.height,this.x,canvas.height-this.height,this.width,this.height);
    }
    Remote(){
        ctx.clearRect(0,0,1000,300);
    }
}

let object1 = new Object1();
function stand(){
    if(1){
        object1.Stand();
        object1.moveRight();
    }
}
stand();


document.addEventListener("keydown", function(event){
    if(event.keyCode == 37){
          object1.Run();
    }
    else if(event.keyCode == 39){
        object1.Run();

    }
})
