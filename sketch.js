const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof, rope;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectMode(CENTER);
	roof = new Roof(width/2,height/4,width/7,20);
	var bobDiameter = 20;

	bobObject1 = new Bob(350,370,bobDiameter);
	bobObject2 = new Bob(375,370,bobDiameter);
	bobObject3 = new Bob(400,370,bobDiameter);
	bobObject4 = new Bob(425,370,bobDiameter);
	bobObject5 = new Bob(450,370,bobDiameter);

	rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2, bobDiameter);
	rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1, bobDiameter);
	rope3=new Rope(bobObject3.body,roof.body,0, bobDiameter);
	rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1, bobDiameter);
	rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2, bobDiameter);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
}