var knife, knifei, fruit1, fruit1Image, fruit2, fruit2Image, fruit3, fruit3Image, fruit4, fruit4Image, alien1, alien1Image, alien2, alien2Image, gameover, gameoverImage;


//to create game states
var PLAY=1;
var END=0;
var gameState=1;

var score=0;

function preload(){
 knifeImage = loadImage("sword.png");
 fruit1Image = loadImage("fruit1.png");
 fruit2Image = loadImage("fruit2.png");
 fruit3Image = loadImage("fruit3.png");
 fruit4Image = loadImage("fruit4.png");
 alien1Image = loadImage("alien1.png");
 alien2Image = loadImage("alien2.png");
 gameoverImage = loadImage("gameover.png") 

 
}
                        
function setup(){
  createCanvas(400,400)
   knife = createSprite(40,200,20,20);
   knife.addImage(knifeImage);
   knife.scale = 0.7;
  
   
 
  knife.setCollider("rectangle",0,0,40,40);
  

score=0;
  fruitsGroup = new Group();
   aliensGroup = new Group();
}
function draw(){
  background("lightblue");
  
  if (gameState===PLAY) {
 knife.x=World.mouseX;
 knife.y=World.mouseY;
  
   
    if(aliensGroup.isTouching(knife)){
      gameState=END
    }
    if(fruitsGroup.isTouching(knife)){
  fruitsGroup.destroyEach();
 
      score=score+1;
    }
    
    frui();
    alie();
    
    textSize(20);
    
  }
  
else if (gameState===END){
  knife.addImage(gameoverImage);
  knife.y=200;
  knife.x=200
  fruitsGroup.destroyEach();
  aliensGroup.destroyEach();
  text("Press 'R' to restart.",150,230);
  
  if(keyDown("r")){
    gameState=PLAY;
    knife.addImage(knifeImage);
    score=0;
  
}
 
  
  }
  
   textSize(20);
  
  drawSprites();
  fill("black")
  text("Score : "+ score,300,30);
  textSize(20)
  
}
function frui(){
  if (World.frameCount%80===0) {
    fruits = createSprite(380,Math.round(random(50,340)),20,20);
    fruits.scale = 0.2;
     
  
  fruits.velocityX = -7;
  fruits.lifetime=60;
  
  fruitsGroup.add(fruits);

   // fruit.debug=true;
    r=Math.round(random(1,4));
    if(r===1){
      fruits.addImage(fruit1Image);
    }
   else if(r===2){
       fruits.addImage(fruit2Image);
    }
   else if(r===3){
       fruits.addImage(fruit3Image);
    }
    if(r===4){
      fruits.addImage(fruit4Image);
    }
      }
  
  
}


function alie(){
  if(World.frameCount%200===0){
    monster = createSprite(380,Math.round(random(20,370)),20,20);
    monster.addAnimation("moving",alien1Image);
    monster.velocityX=-8;
    monster.lifetime=60;
    
    aliensGroup.add(monster);
  }
}
