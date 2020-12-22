
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin, dustbinImage, ground, invGround;
var boxL, boxR, boxD;

function preload()
{
	
	dustbinImage = loadImage("dustbingreen.png");
}

function setup() {
	
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	dustbin = createSprite(600,555,1,1);
	dustbin.addImage("dustbinImage",dustbinImage);
	dustbin.scale = 0.5;

	paper = new Paper(100,100,70);

	ground = new Box(width/2,675,width,70);

	boxD = new Box(600,650,200,20);
	boxL = new Box(525,555,20,165);
	boxR = new Box(675,555,20,165);

	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.display();
  paper.display();
  boxD.display();
  boxL.display();
  boxR.display();
  
  drawSprites();
 
}

function keyPressed(){

	if(keyDown(UP_ARROW)){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:14,y:-15})
	}
}