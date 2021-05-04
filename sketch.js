const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var box;
var slingshot;

var stand1;

var block1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;

var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  ground=new Ground(400, 790, 800, 30);
  stand1=new Ground(390,300,250,10);
  ball=Bodies.circle(50,200,20);
  World.add(world,ball);
  
block1=new Box(300,275,30,40);
block2=new Box(330,275,30,40);
block3=new Box(360,275,30,40);
block4=new Box(390,275,30,40);
block5=new Box(420,275,30,40);
block6=new Box(450,275,30,40);
block7=new Box(480,275,30,40);
//level 1 done
block8=new Box(330,235,30,40);
block9=new Box(360,235,30,40);
block10=new Box(390,235,30,40);
block11=new Box(420,235,30,40);
block12=new Box(450,235,30,40);
//level 2 done
block13=new Box(360,195,30,40);
block14=new Box(390,195,30,40);
block15=new Box(420,195,30,40);
//level 3 done
block16=new Box(390,155,30,40);
//level 4 done

slingshot=new Slingshot(ball.Body,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 ground.display();
 slingshot.display();
 stand1.display();
 
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 block14.display();
 block15.display();
 block16.display();
 
}
function mouseDragged(){ 
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
  slingshot.fly();

}