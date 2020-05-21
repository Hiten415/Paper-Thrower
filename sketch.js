var paperSprite;
var paperBody, ground;
var bin1, bin2, bin3,bin1b;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	bin1 = createSprite(580,650,200,20);
	bin1.shapeColor = "red";
	
	

	bin2 = createSprite(480,550,20,200);
	bin2.shapeColor = "red";

	bin3 = createSprite(680,550,20,200);
	bin3.shapeColor = "red";

	paperSprite=createSprite(100, 100);
	paperSprite.radius = 100;
	paperSprite.scale=0.5;
	

	
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(100 , 640 , 5 , {restitution:0.6});
	World.add(world, paperBody);
	
    bin1b = Bodies.rectangle(580,650,200,20,{restitution:0.6, isStatic:true});
	bin1b.shapeColor = "red";
	World.add(world, bin1b);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  text (mouseX + ", " + mouseY,500,500);
  Engine.update(engine);
  background(0);
  paperSprite.x= paperBody.position.x ;
  paperSprite.y= paperBody.position.y;
  bin1.x= bin1b.position.x ;
  bin1.y= bin1b.position.y;
  drawSprites();
  keyPressed();
}





