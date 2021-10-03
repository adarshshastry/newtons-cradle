
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,450,70)
	bob2 = new Bob(270,450,70)
	bob3 = new Bob(340,450,70)
	bob4 = new Bob(410,450,70)
	bob5 = new Bob(480,450,70)
	roof = new Roof(350,20,420,50)
	// rope1 = new Chain(bob1.body,roof.body,200,0)
	// rope2 = new Chain(bob2.body,roof.body,270,0)
	// rope3 = new Chain(bob3.body,roof.body,340,0)
	// rope4 = new Chain(bob4.body,roof.body,410,0)
	// rope5 = new Chain(bob5.body,roof.body,480,0)
	rope1 = new Chain(bob1.body,roof.body,-140,0)
	rope2 = new Chain(bob2.body,roof.body,-70,0)
	rope3 = new Chain(bob3.body,roof.body,0,0)
	rope4 = new Chain(bob4.body,roof.body,70,0)
	rope5 = new Chain(bob5.body,roof.body,140,0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed(){
       if(keyCode === UP_ARROW){
		   console.log("key pressed")
		   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100})
	   }  
	}


