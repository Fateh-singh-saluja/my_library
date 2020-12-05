var fixRectangle;
var movingRectangle;
var rec1,rec2;


function setup() {
  createCanvas(800,400);
  fixRectangle = createSprite(400, 200, 100, 60);
  fixRectangle.shapeColor="green";
  movingRectangle= createSprite(400, 200, 80, 60);
  movingRectangle.shapeColor="blue";

  rec1 = createSprite(0, 100, 100, 60);
  rec1.shapeColor="pink";
  rec1.velocityX=1;
  rec1.velocityY=0;

  rec2= createSprite(300, 100, 80, 60);
  rec2.shapeColor="purple";
  rec2.velocityX=-1;
  rec2.velocityY=0;
}

function draw() {
  background("lightyellow");  
    movingRectangle.x=World.mouseX;
    movingRectangle.y=World.mouseY;
    console.log(movingRectangle.x-fixRectangle.x);

   
 
 

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
   bounceOff(rec1,rec2);

  
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
function bounceOff(object1,object2){
  if((object1.x-object2.x)<(object1.width/2+object2.width/2)
  &&(object2.x-object1.x)<(object1.width/2+object2.width/2) )
 {
  object1.velocityX=object1.velocityX*(-1);
  object2.velocityX=object2.velocityX*(-1);
}
if((object1.y-object2y)<(object1.height/2+object2.height/2)
&&(object2.y-object1.y)<(object1.height/2+object2.height/2) )
{
object1.velocityY=object1.velocityY*(-1);
object2.velocityY=object2.velocityY*(-1);
}
}
  

