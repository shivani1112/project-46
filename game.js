class Game{
    constructor(){
        this.startButton = createSprite(width/2+200,height-100);
        this.startImg = loadImage("images/play.png");
        this.startButton.addImage(this.startImg);
        this.wolfImg = loadImage("images/wolf.png");
        this.x = width;
        this.redImg = loadImage("images/red ridding hood.png")
    }
    start(){
        textSize(30);
        textFont("Amsterdam");
        noStroke();
        fill("yellow");
        text ("Cut And Run",width/2-200,height/2-200);
        player.sprite.visible = false;
        ground.visible = false;
        text ("You are Nova who is going to the capital to get a a job in the palace,  you",width/2-700,height/2);
        text("on your way there",width/2-200,height/2+50);
        text("meet the demon wolf who is a magical crature", width/2-700,height/2+100);
        text("to save your life you have to reach the catel as soon as possible", width/2-300,height/2+150);
        if(mousePressedOver(this.startButton)){
            gameState = 1;
        }
        }
    play(){
        player.sprite.visible = true;
        ground.visible = true;
        this.startButton.visible = false;
        camera.position.x = player.sprite.x;
        ground.x = camera.position.x; 
        if(keyIsDown (32)){
            player.sprite.velocityY = -20;    
        }
        player.gravity(0.6);
        player.sprite.collide(ground);
        this.spawnWolf();
        this.spawnHood()
    }
    end(){}
    spawnWolf(){
        if(frameCount%60 === 0){
            this.x = this.x +1200;
            var wolf = createSprite(this.x,height-75,10,10);
            wolf.addImage(this.wolfImg);
            wolf.scale = 0.4;
        }
    }
    spawnHood(){
        if(frameCount%60 === 0){
            this.x = this.x +1200;
            var hood = createSprite(this.x,height-75,10,10);
            hood.addImage(this.redImg);
            hood.scale = 0.4;
        }
    }

}