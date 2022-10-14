
var boat, boat_floating; 
var sea, sea_image;

function preload(){
  boat_floating = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
  sea_image = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400, 200)
  sea.addImage(sea_image)
  sea.velocityX = -5
  sea.scale = 0.3

  boat = createSprite(130, 200)
  boat.addAnimation ("floating",boat_floating)
  boat.scale = 0.2;
 
}

function draw() {
  sea.velocityX = -3
  drawSprites();
 
  
}