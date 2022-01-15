
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg , player;
var bgImg , fighterImg;

function preload()
{
	fighterImg = loadImage("fighter pilot.jpg");
	bgImg = loadImage("bg1.jpg");
}

function setup() {
	createCanvas(800, 700);

	bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  bg.addImage(bgImg);
  bg.scale = 1.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     player = createSprite(displayWidth-1150,displayHeight-300,50,50);
	 player.addImage(fighterImg);
	 player.scale = 1;
	 player.debug = true;
	 player.setCollider("rectangle",0,0,300,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  if(keyDown("UP_ARROW") || touches.length>0){
	player.y = player.y - 30;
	  }
	  if(keyDown("DOWN_ARROW") || touches.length>0){
		player.y = player.y + 30;
	  }
	  
  
  drawSprites();
 
}



