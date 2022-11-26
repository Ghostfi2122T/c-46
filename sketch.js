var tileable;
var tile;
var player;
var pin;
var bubblesGroup;
var playerGroup;
var score;


function preload(){
  tileable=loadImage("./assets/Tileable-classic-water-texture.jpg")
  tile=loadImage("./assets/tile000.png")
   pin=loadImage("./assets/pin.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  player=createSprite(100,150,20,20);
  player.addImage("pin",pin);
  player.scale=0.2;
  score=0;

  playerGroup=createGroup()
  bubblesGroup=createGroup()
  playerGroup.add(player);

 
}

function draw() {
  background(tileable);  
  spawnBubbles();
  player.x=World.mouseX;
  player.y=World.mouseY;
  if(bubblesGroup.collide(player)){
  handleBubbleCollision(bubblesGroup);
  }
  
  drawSprites();
  textSize(50);
  fill ("red")
  text("Score: ",score,200,200)
}

function spawnBubbles(){
  if(frameCount%80==0){
    var x=random(50,windowWidth-50);
  var bubble=createSprite(x,0,20,20);
  bubble.addImage("balloon",tile);
  bubble.scale=0.5;
  bubble.velocityY=5;
  bubblesGroup.add(bubble);
  }
}

function spawnObstacles(){
  if(frameCount%160==0){
    var x=random(100,windowWidth-100);
  var obstacle=createSprite(x,0,20,20);
  spawnObstacles.addImage("")
  }

}

function handleBubbleCollision(bubblesGroup){
  score=score+5
bubblesGroup.destroyEach();
}
