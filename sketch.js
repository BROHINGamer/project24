
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	cup= new Cup(600,630,200,10,);
	cup2= new Cup(500,590,10,100,);
	cup3= new Cup(700,590,10,100,);
ball=new Ball(100,680,5);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  cup.display();
  cup2.display();
  cup3.display();
  ball.display();
  drawSprites();
 
}



