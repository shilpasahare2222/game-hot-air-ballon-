var sky ,skyIng;
var balloon,balloonIng;
var Clouds,cloudIng,

function preload() {
skyIng=loadImage("assets/bj.jpg")
balloonIng=loadImage("assets/balloon.png")
cloudIng=loadImage("cloud 2.png")
}

function setup() {
  createCanvas(displayWidth-100,displayHeight-100);
  bg=createSprite(0,0)
  bg.addImage(skyIng)
  bg.scale=8.5
 bg.velocityX=-2
 balloon=createSprite(200,200,30,20);
 balloon.addImage(balloonIng);
 balloon.scale=0.4
 
}

function draw() {
  background(skyIng);  
if(keyIsDown(UP_ARROW)){
balloon.y = balloon.y -10
}
if(keyIsDown(DOWN_ARROW)){
  balloon.y = balloon.y+10
}
if(keyIsDown(LEFT_ARROW)){
  balloon.x = balloon.x-10
}
if(keyIsDown(RIGHT_ARROW)){
  balloon.x = balloon.x+10
}
 if(bg.x<0){
   bg.x=bg.width/2
 }
 //spawanClouds();

  drawSprites();
}
//function spawanClouds() {

//if(frameCount%60===0){
 // Clouds=createSprite(400,200,30,20);
  //Clouds.addImage(cloudIng);
 // Clouds.scale=0.5;
 // Clouds.y = Math.random(random(10,80));
 // Clouds.velocityY=-5
 
//}

//}














