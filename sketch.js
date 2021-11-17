var ENDS = 2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

var backGround, backGroundImage, invisibleLine, spaceSound;
var submarine, submarineImage;

var BGIMG;

var increaseX;
var xy = 0;
var io1, io2, io3, io4;

var obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, shark, sharkImage, obstacleImage;

var DC = 0;
var score = 0;
var star, starImage, scoreImage;


function preload(){
  backGroundImage = loadImage("UWBGIMG.png");
  submarineImage = loadImage("SubmarineImage.png");
  //oceanSound = loadSound("spaceSound.mp3");
  sharkImage = loadImage("SharkImage.png");
  //scoreImage = loadImage("starImage.png");
  obstacleImage = loadImage("RockImage.png");
  BGIMG = loadImage("OceanBackGround.jpg");
  
}

function setup() {
  createCanvas(6000, 600);
  backGround = createSprite(3000, 300, 300, 300);
  backGround.addImage(backGroundImage);
  backGround.scale = 2.5;
  
  
  submarine = createSprite(100, 300, 20, 20);
  submarine.addImage(submarineImage);
  submarine.scale = 0.1;
  
 // invisibleLine = createSprite(300, 20, 600, 50);
 // invisibleLine.visible = false;
  
 // starImage = createSprite(400, 25, 20, 20);
 // starImage.addImage(scoreImage);
 // starImage.scale = 0.1;
  
 io1 = createSprite(displayWidth*2, 300, 60, 60);
 io1.visible = false;
 
 io2 = createSprite(displayWidth*2, 300, 60, 60);
 io2.visible = false;
 
 io3 = createSprite(displayWidth*2, 300, 60, 60);
 io3.visible = false;
 
 io4 = createSprite(displayWidth*2, 300, 60, 60);
 io4.visible = false;
 
 io5 = createSprite(displayWidth*2, 300, 60, 60);
 io5.visible = false;
 
 io6 = createSprite(displayWidth*2, 300, 60, 60);
 io6.visible = false;
 
 io7 = createSprite(displayWidth*2, 300, 60, 60);
 io7.visible = false;
 
 io8 = createSprite(displayWidth*2, 300, 60, 60);
 io8.visible = false;
 
     
  
  
}


function draw() {
  background(0);
  
  //if(backGround.x == 0){
   // backGround.x = 3000;
    
 //}
  xy = xy+1*10
  increaseX = increaseX+xy;
  score = score+1;
  
  
  //if(gameState == START){
    //backGround.visible = false;
    
    //score = 0;
    //DC = 0;
    
    //textSize(20);
   // fill("white");
   // text("click on 's' to start", displayWidth/2-200, 200);
    
    
    
  //}
  
  //(camera-3000)+
  
  if(gameState == PLAY){
    
  backGround.visible = true;
   
if(frameCount % 120 == 0){
  obstacle2 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle2.addImage(obstacleImage);
 //obstacle2.velocityX = -20;
  obstacle2.scale = random(0.02, 0.04);
  obstacle2.lifetime = 300;
  io1.x = obstacle2.x;
  io1.y = obstacle2.y;
  //if(submarine.isTouching(obstacle2)){
    //gameState = END;
 // obstacle2.lifetime = 0;
  //}
 }
  
 if(frameCount % 150 == 0){
  obstacle3 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle3.addImage(obstacleImage);
 // obstacle3.velocityX = -20;
  obstacle3.scale = random(0.02, 0.04);
  obstacle3.lifetime = 300;
  io2.x = obstacle3.x;
  io2.y = obstacle3.y;
   //if(submarine.isTouching(obstacle3)){
    //gameState = END;
   // obstacle3.lifetime = 0;
  //}
    
 } 
 
  if(frameCount % 180 == 0){
  obstacle4 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle4.addImage(obstacleImage);
  //obstacle4.velocityX = -20;
  obstacle4.scale = random(0.02, 0.04);
  obstacle4.lifetime = 300;
  io3.x = obstacle4.x;
  io3.y = obstacle4.y;
  //if(submarine.isTouching(obstacle4)){
    //gameState = END;
   // obstacle4.lifetime = 0;
 // }  
 }
    
    
   if(frameCount % 130 == 0){
  obstacle5 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle5.addImage(obstacleImage);
  //obstacle5.velocityX = -20;
  obstacle5.scale = random(0.02, 0.04);
  obstacle5.lifetime = 300;
  io5.x = obstacle5.x;
  io5.y = obstacle5.y;
  //if(submarine.isTouching(obstacle4)){
    //gameState = END;
   // obstacle4.lifetime = 0;
 // }  
 }
    
     if(frameCount % 140 == 0){
  obstacle6 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle6.addImage(obstacleImage);
  //obstacle6.velocityX = -20;
  obstacle6.scale = random(0.02, 0.04);
  obstacle6.lifetime = 300;
  io6.x = obstacle6.x;
  io6.y = obstacle6.y;
  //if(submarine.isTouching(obstacle4)){
    //gameState = END;
   // obstacle4.lifetime = 0;
 // }  
 }
    
     if(frameCount % 160 == 0){
  obstacle7 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle7.addImage(obstacleImage);
  //obstacle7.velocityX = -20;
  obstacle7.scale = random(0.02, 0.04);
  obstacle7.lifetime = 300;
  io7.x = obstacle7.x;
  io7.y = obstacle7.y;
  //if(submarine.isTouching(obstacle4)){
    //gameState = END;
   // obstacle4.lifetime = 0;
 // }  
 }
    
    
 if(frameCount % 170 == 0){
  obstacle8 = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  obstacle8.addImage(obstacleImage);
  //obstacle8.velocityX = -20;
  obstacle8.scale = random(0.02, 0.04);
  obstacle8.lifetime = 300;
  io8.x = obstacle8.x;
  io8.y = obstacle8.y;
  //if(submarine.isTouching(obstacle4)){
    //gameState = END;
   // obstacle4.lifetime = 0;
 // }  
 }
  
    
  if(frameCount % 150 == 0){
  shark = createSprite(displayWidth+xy, Math.round(random(50, 550)));
  shark.addImage(sharkImage);
  //shark.velocityX = -20;
  shark.scale = 0.2;
  shark.lifetime = 300;
  io4.x = shark.x;
  io4.y = shark.y;
  //if(submarine.isTouching(shark)){
    //gameState = END;
    //shark.lifetime = 0;
  //}  
 }
  
  if(frameCount % 280 == 0){
    backGround.x = backGround.x+2800;
  }
  
  
  
// if(DC % 100 == 0){
  // score = score + 1;
// }
  
  
 // DC = DC + 1;
  
  //if(keyDown("right")){
    submarine.velocityX = 10;
   // backGround.velocityX = 10;
  //}
  camera.x = submarine.x+2900;
  submarine.y = mouseY;
    
  if(submarine.isTouching(io1)){
    gameState = END;
    console.log("recieve");
     score = 0;
  }
  if(submarine.isTouching(io2)){
    gameState = END;
    console.log("recieve");
     score = 0;
  }  
   if(submarine.isTouching(io3)){
    gameState = END;
    console.log("recieve");
     score = 0;
  }  
   if(submarine.isTouching(io4)){
   gameState = ENDS;
   console.log("recieve");
     score = 0;
  }
    
   if(submarine.isTouching(io5)){
   gameState = END;
   console.log("recieve");
     score = 0;
  }

   if(submarine.isTouching(io6)){
   gameState = END;
   console.log("recieve");
     score = 0;
  }
    
   if(submarine.isTouching(io7)){
   gameState = END;
   console.log("recieve");
     score = 0;
  } 
        
   if(submarine.isTouching(io8)){
   gameState = END;
   console.log("recieve");
     score = 0;
  } 
            
    if(submarine.isTouching(io3)){
   gameState = END;
   console.log("recieve");
     score = 0;
  }  
 
 

  
  drawSprites();
  textSize(20);
  fill("white");
  text("score : "+score, (displayWidth-250)+xy, 30);
  
    
  }
  
  if(gameState == END){
    backGround.visible = false;
    
    
    textSize(20);
    fill("white");
    text("Oops! You hit an object.", camera.x-2500, 200);
    text("But don't worry. Just click on 'r' to restart the game", camera.x-2500, 250);
    //text("click on 'r' to restart again", 200, 300);
    
    if(keyDown("r") && gameState == END){
      gameState = PLAY;
    }
    
  }
  
    if(gameState == ENDS){
    backGround.visible = false;
    
    
    textSize(20);
    fill("white");
    text("Oh No!!! A shark just ate you!!!", camera.x-2500, 200);
    text("But don't worry. Just click on 'r' to restart the game. ", camera.x-2500, 250);
    //text("click on 'r' to restart again", 200, 300);
    
    if(keyDown("r") && gameState == ENDS){
      gameState = PLAY;
    }
    
  }
  
 
 
  
}







