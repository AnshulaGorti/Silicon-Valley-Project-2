var tiger, tigerAnimation
var backgroundImage, background
var bush,bushImage
var deer, deerAnimation


function preload(){
  tigerAnimation=loadAnimation("pic/t1.png","pic/t2.png","pic/t3.png","pic/t4.png","pic/t5.png")
  deerAnimation=loadAnimation("pic/d1.png", "pic/d2.png", "pic/d3.png","pic/d4.png","pic/d5.png")
  bushImage=loadImage("pic/bush.png")
  backgroundImage=loadImage("pic/bg1.png")
}

function setup() {
  createCanvas(1200,400);
  background1=createSprite(400,200);
  background1.addImage("bg",backgroundImage);
  background1.scale=3.5
 background1.velocityX=-5;

 tiger=createSprite(150,310);
 tiger.addAnimation("tiger",tigerAnimation);
 tiger.scale=0.6

 deer=createSprite(450,305)
 deer.addAnimation("deer", deerAnimation)
 deer.scale=0.5

 bush=createSprite(600,200,200,700)
 bush.addImage(bushImage)
 bush.scale=0.4
 bush.velocity=5
}

function draw() {
  background("green");
  
    if (background1.x < 0){
    background1.x =1200
  }

  

  drawSprites();
}