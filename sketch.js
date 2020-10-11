const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform1 , platform2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var block21, block22,block23, block24, block25;

var polygon , rope , polygonImage;
var backgroundImage;
var bg = "dark background.png";
var score;

function preload(){
    backgroundColor();
}
function setup(){

    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;
    score = 0;
    platform1 = new Ground(700,300,300,10);
    platform2 = new Ground(1100,200,220,10);

    block1 = new Box(700,280,40,50)
    block2 = new Box(720,280,40,50)
    block3 = new Box(740,280,40,50)
    block4 = new Box(680,280,40,50)
    block5 = new Box(660,280,40,50)
    block6 = new Box(650,280,40,50)
    block7 = new Box(760,280,40,50)


    block8 = new Box(700,260,40,50)
    block9 = new Box(720,260,40,50)
    block10 = new Box(740,260,40,50)
    block11 = new Box(680,260,40,50)
    block12 = new Box(660,260,40,50)


    block13 = new Box(680,240,40,50)
    block14 = new Box(700,240,40,50)
    block15 = new Box(720,240,40,50)


    block16 = new Box(700,220,40,50)

    //second line
    block17 = new Box(1110,180,40,50)
    block18 = new Box(1130,180,40,50)
    block19 = new Box(1150,180,40,50)
    block20 = new Box(1090,180,40,50)
    block21 = new Box(1070,180,40,50)

    block22 = new Box(1070,120,40,50)
    block23 = new Box(1140,160,40,50)
    block24 = new Box(1110,160,40,50)
    
    block25 = new Box(1110,140,40,50)
    
   
 
  polygon = new player(300 , 200);
    
   
   rope = new Slingshot(polygon.body,{x:300,y:200})
  
}

function draw(){
    if(backgroundImage)
        background(backgroundImage)

        textSize(35);
        fill("red");
        text("score = " + score , 650 , 50);

    Engine.update(engine);
    strokeWeight(4);
    platform1.display();
    platform2.display();

    fill(141, 213, 239)
    block1.display();
    block1.score();
    block2.display();
    block2.score();
    block3.display();
    block3.score();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

   fill(255, 190, 203)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(63, 224, 208)
    block13.display();
    block14.display();
    block15.display();

    fill(127, 128, 128)
    block16.display();

    fill(141, 213, 239)
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill(63, 224, 208)
    block22.display();
    block23.display();
    block24.display();

    fill(255, 190, 203)
    block25.display();

  polygon.display();

    rope.display(); 
    
   
    
   
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    
}

function mouseDragged(){
 Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY})
}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
    if(keyCode === 32){
        rope.attach(polygon.body)

    }
}

async function backgroundColor(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var respJSON = await response.json();

    var datetime = respJSON.datetime;
    var hour = datetime.slice(11,13);

    if(hour>=06 && hour<=18){
        bg = "light background.png";
    }
  else{
        bg = "dark background.png";
  }

  backgroundImage = loadImage(bg);

}
