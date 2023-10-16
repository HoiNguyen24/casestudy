let Die = new Image();
Die.src = "Dead.png";
function  createPlayer(){
    player.draw();
    player.check();
}
let Deadx = 40;
let deadframde = 0;
let deadX = 0;
let modal = document.getElementById("myModal");
function createGameOver(){
modal.style.display = "block";
}

function createPlayerdead(){
    if(gameFrame%10 == 0){
        deadframde++;
        if(deadframde >= 10){
             createGameOver();
        }
        if(deadframde == 9){
            deadX = 0;
        }
        else deadX++;
    }
    ctx.drawImage(Die,Deadx+130*deadX,70,30,128-70,80,canvas.height-player.y_vertical,30,128-70);
}
document.addEventListener('keydown', function(event){
    switch(event.keyCode){
        case 38 :
            player.moveTop();
            break;
        case 40: player.moveDown();
        break;
    }
})
let count = 1;
function Play(){
    if(!gameOver){
        player.delete();
        createPlayer();
        createcnv();
        createPoint();
        gameFrame++;
        requestAnimationFrame(Play);
    }
    else {
        player.delete();
        for(let i=0; i < cnvArray.length;i++){
            cnvArray[i].draw();
        }
        for(let i=0; i < pArray.length;i++){
            pArray[i].draw();
        }
        createPlayerdead();
        gameFrame++;
        console.log(gameScore);
        requestAnimationFrame(Play);
    }
}
Play();
