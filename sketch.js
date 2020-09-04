var cook,cookIMG;
var customers,customersIMG1;
var waiters,waitersIMG;
var menu,menuIMG;
var backround,backroundIMG
 var coustomer1IMG,coustomerIMG2,customerIMG3,customerIMG4,customerIMG5,customerIMG6;
 var guestGroup;
function preload(){
  backroundIMG=loadImage("images/new wall.jpg")
  cookIMG=loadImage("images/cook new.png");
  customersIMG=loadImage("images/coustomers new.png")
  waitersIMG=loadImage("images/waiters new.png")
  menuIMG=loadImage("images/menu new.png")
  coustomer1IMG=loadImage("images/cartoon-people.png")
  coustomerIMG2=loadImage("images/cartoon-people2.png")
  coustomerIMG3=loadImage("images/cartoon-people3.png")
  coustomerIMG4=loadImage("images/cartoon-people4.png")
  coustomerIMG5=loadImage("images/cartoon-people5.png")
  coustomerIMG6=loadImage("images/cartoon-people6.png")
}
function setup() {
  createCanvas(1200,500);
  backround=createSprite(600,50,400,200)
  backround.addImage("BG",backroundIMG)
  

  cook=createSprite(200,200,40,40)
  cook.addImage("chef",cookIMG)
  cook.scale=0.4

  coustomers=createSprite(600,300,60,60)
  coustomers.addImage("guest",customersIMG)
guestGroup=new Group()
}


function draw() {
  background(0);

 if(keyDown(UP_ARROW)){
spawnCoustomers();
 }
 
  drawSprites();
  fill ("black")
  textSize(40)
  text("press the up arrow to start",200,100) 
  
}
function spawnCoustomers(){
  if(frameCount%10===0){
var coustomer=createSprite(1200,400,40,40)

coustomer.velocityX=-3
coustomer.lifetime=300

var rand=Math.round(random(1,6))
switch(rand){
case 1:coustomer.addImage("COUS",coustomer1IMG)
break;
case 2:coustomer.addImage("COUS1",coustomerIMG2)
break;
case 2:coustomer.addImage("COUS2",coustomerIMG3)
break;
case 3:coustomer.addImage("COUS3",coustomerIMG4)
break;
case 4:coustomer.addImage("COUS4",coustomerIMG5)
break;
case 5:coustomer.addImage("COUS5",coustomerIMG6)
break;
guestGroup.add(coustomer);
}
  }
}