const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {

createCanvas(1000,500);

engine = Engine.create();
world = engine.world;



  base = new Ground(400, 350, 200, 20);
  base1 = new Ground(700, 200, 200, 20);
  block1 = new Box(340, 325, 30, 30, "pink");
  block2 = new Box(370, 325, 30, 30, "pink");
  block3 = new Box(400, 325, 30, 30, "pink");
  block4 = new Box(430, 325, 30, 30, "pink");
  block5 = new Box(460, 325, 30, 30, "pink");
  block6 = new Box(370, 295, 30, 30, "red");
  block7 = new Box(400, 295, 30, 30, "red");
  block8 = new Box(430, 295, 30, 30, "red");
  block9 = new Box(400, 265, 30, 30, "orange");
  block10 = new Box(640, 175, 30, 30, "blue");
  block11 = new Box(670, 175, 30, 30, "blue");
  block12 = new Box(700, 175, 30, 30, "blue");
  block13 = new Box(730, 175, 30, 30, "blue");
  block14 = new Box(760, 175, 30, 30, "blue");
  block15 = new Box(670, 145, 30, 30, "purple");
  block16 = new Box(700, 145, 30, 30, "purple");
  block17 = new Box(730, 145, 30, 30, "purple");
  block18 = new Box(700, 115, 30, 30, "orange");

  hexagon = Bodies.circle(300, 200, 30, 30);
  World.add(world, hexagon);

  slingshot = new SlingShot(this.hexagon, {x:100, y:200});

  

}


function draw() {

  background("lightblue");  

  Engine.update(engine);

  base.display();
  base1.display();
  block1.display();
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
  block17.display();
  block18.display();

  ellipse(hexagon.position.x, hexagon.position.y, 30, 30);

  slingshot.display();




}

function mouseDragged() {

  Matter.Body.setPosition(this.hexagon, {x: mouseX, y:mouseY});

}

function mouseReleased() {
  slingshot.fly();
  
}

function keyPressed() {
  if(keyCode == 32) {
    Matter.Body.setPosition(hexagon.body, {x:100, y:200})
   // slingshot.attach(hexagon.body);
  }
}



