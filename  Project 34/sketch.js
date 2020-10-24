//Create variables here
var Dog,dogHappy
var Database
var foodS,foodStock
function preload(){
  dl = loadImage("images/dogImg.png");
  dl2=loadImage("images/dogImg1.png")
}

function setup(){
  createCanvas(500, 500);
  database=firebase.database()
  var foodStock=database.ref('Food')
  foodStock.on('value',readStock)
  dog=createSprite(250,250,200,200)
  dog.addImage(dl)
  dog.scale=.1
  
}


function draw() {  
  background(46, 139, 87)
  drawSprites();
  //add styles here
  textSize(10)
  fill("white")
  text("Note: Press Up Arrow Key to Feed Drago Milk.",100,15)
if (keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(dl2)
}
text("Food Remaining:"+foodS,190,200)
}
function readStock(data){
  foodS=data.val()
  }
function writeStock(x){
  if(x<=0){
x=0;
dog.addImage(dl)
foodS=20
  }    
  else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
})
}



