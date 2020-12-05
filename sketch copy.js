var fixRectangle;
var movingRectangle;


function setup() {
  createCanvas(800,400);
  fixRectangle = createSprite(400, 200, 100, 60);
  fixRectangle.shapeColor="green";
  movingRectangle= createSprite(400, 200, 80, 60);
  movingRectangle.shapeColor="green";
}

function draw() {
  background(0,0,0);  
    movingRectangle.x=World.mouseX;
    movingRectangle.y=World.mouseY;
    
   if(isTouching(fixRectangle,movingRectangle)){
  fixRectangle.shapeColor="red";
  movingRectangle.shapeColor="red";
   }
   else{
     fixRectangle.shapeColor="green";
    movingRectangle.shapeColor="green";
   }
   if(isTouching(rec1,rec2)){
    rec1.shapeColor="red";
    rec2.shapeColor="red";
     }


  drawSprites();
}
function isTouching(object1,object2){
  if((object1.x-object2.x)<(object1.width/2+object2.width/2)
  &&(object2.x-object1.x)<(object1.width/2+object2.width/2) 
  &&(object2.y-object1.y)<(object2.height/2+object1.height/2)
  &&(object1.y-object2.y)<(object2.height/2+object1.height/2)){
   
   return true;
  }else{
   return false;
  }
}