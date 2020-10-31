var dog, dog1, happyDog;
var database;
var foodS, foodStock;

function preload(){
  dog = loadImage("dogImg.png");
  dogHappy = loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog1 = createSprite(250,250,0,0);
  dog1.addImage(dog);
  
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)

}


function draw() {  
  background(46,139,87);

  textSize(20);
  fill("white");
  stroke("white");
  strokeWeight(1.5);
  text("NOTE: Press UP_ARROW Key To Feed Drago Milk!", 200, 150);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(dogHappy);
  }

  drawSprites();
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  } else {
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })

}