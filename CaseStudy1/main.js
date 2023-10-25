let Die = new Image();
Die.src = "Dead.png";
let map = new Image();
map.src = "map.jpg";
let shield1 = new shield();
function createShield(){
    shield1.check();
    if(shield1.statusShield == true){
        shield1.draw();
    }
}
function  createPlayer(){
    player.draw();
    player.check();
}
function createHP(){
    ctx.font = '25px Arial';
    ctx.fillText("HP: " + player.hp,0,30);
    ctx.strokeRect(80,5,300,30);
    ctx.fillStyle = 'red';
    ctx.fillRect(80,5,player.hp*30,30);
}
let Deadx = 40;
let deadframde = 0;
let deadX = 0;
var modal = document.getElementById("myModal");
function CreateGameOver(){
    if(gameOver = true){
        modal.style.display = "block";
        document.getElementById("checking_score").innerHTML = "GAME OVER!";
        document.getElementById("point").innerText = "Point: " +gameScore;
        document.getElementById("heightScore").innerText = "Highest Score: " + height_score;
    }
}
let mapFrame = 0;
let mapX = 0;
function createmap(){
    if(gameOver == false){
        if(gameFrame % 10 == 0){
            mapFrame++;
            if(mapFrame > 3)
                mapFrame = 0;
            if(mapFrame == 3)
                mapX = 0;
            else
                mapX++;
        }
        ctx.drawImage(map,300-mapX*100,527,700,300,0,0,1000,400);
    }
    else{
        ctx.drawImage(map,300-mapX*100,527,700,300,0,0,1000,400);
    }
}
function Restart(){
    modal.style.display = "none";
    gameScore = 0;
    player.hp = 10;
    player.speed = 10;
    gameOver = false;
    deadX = 0;
    score();
    while(pArray.length > 0) {
        pArray.pop();
    }
    while(cnvArray.length > 0){
        cnvArray.pop();
    }
}
function createPlayerdead(){
    if(gameFrame%15 == 0){
        deadframde++;
        if(deadframde >= 10){
            deadframde = 0;
             CreateGameOver();
        }
        deadX++;
    }
    ctx.drawImage(Die,Deadx+130*deadX,65,30,128-60,80,canvas.height-player.y_vertical,30,128-65);
}
let count = 1;
let modal1 = document.getElementById("myModal1");
function createStart(){
    document.getElementById("checking_score").innerHTML = "Point: " + gameScore + " High score: " + height_score;
    modal1.style.display = "none";
    Status = true;
    console.log(Status);
    Play();
}
function Play(){
    if(player.hp == 0) gameOver = true;
    if(Status == false){
        document.getElementById("checking_score").innerHTML = "Yah";
        modal1.style.display = "block";
    }
    else {
        if (!gameOver) {
            player.delete();
            createmap();
            createHP();
            createcnv();
            createShield();
            createPlayer();
            createPoint();
            gameFrame++;
            requestAnimationFrame(Play);
        } else {
            player.delete();
            createmap();
            createHP();
            for (let i = 0; i < cnvArray.length; i++) {
                cnvArray[i].draw();
            }
            for (let i = 0; i < pArray.length; i++) {
                pArray[i].draw();
            }
            createPlayerdead();
            gameFrame++;
            requestAnimationFrame(Play);
        }
    }
}
Play();
    document.addEventListener('keydown', function(event){
        switch(event.keyCode){
            case 38 :
                player.moveTop();
                break;
            case 40:
                player.moveDown();
                break;
        }
    })

