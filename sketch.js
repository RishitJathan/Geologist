
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer1 = new Hammer(10,10);
	iron1 = new Iron(500,300,30,100);
	ground = new Ground(400,700,800,10);
	wood = new Wood(400,300,20,150);
	sand1 = new Sand(375,300);
	sand2 = new Sand(370,300);
	sand3 = new Sand(365,300);
	sand4 = new Sand(360,300);
	brass = new Brass(100,300);
	rubber = new Rubber(600,300);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
hammer1.display();
iron1.display();
ground.display();
wood.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
brass.display();
rubber.display();

  drawSprites();
 
}



