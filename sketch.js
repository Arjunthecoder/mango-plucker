const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,stone,tree,boy;
var gardenImg;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var rubberBand;
var object1,object2,object3,object4,object5,object6,object7,object8,object9,object10,object11,object12,object13,object14,object15,object16;

function preload()
{
	boy = loadImage("boy.png");
	gardenImg = loadImage("garden.jpg");
}

function setup() {
	createCanvas(1350, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(650,640,1400,30);
	stone = new Stone(100,100,41);
//	tree = new Tree(1150,330,350,600);
	tree = new Tree(1050,330);
	mango1 = new Mango(1010,330,40);
	mango2 = new Mango(1100,330,40);
	mango3 = new Mango(965,240,40);
	mango4 = new Mango(1050,150,40);
	mango5 = new Mango(1020,174,40);
	mango6 = new Mango(1130,250,40);
	mango7 = new Mango(1053,210,40);
	mango8 = new Mango(1100,240,40);

  	rubberBand = new RubberBand(stone.body,{x:230,y:400});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(gardenImg);

  image(boy,200,340,200,300);
  ground.display();
  tree.display();

  stone.display();
 

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  rubberBand.display();
  fill("blue");
  textSize(40);
  text("Press Space To Play Again",200,200);
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    rubberBand.fly();   
}

function keyPressed(){
  if (keyCode === 32 ) {
    rubberBand.attach(stone.body);
  }
}
function detectCollision(object1,object2){
  if (dist(object1.body.position.x , object1.body.position.y , object2.body.position.x , object2.body.position.y ) < object1.r + object2.r ){ 
      //object2.x - object1.x < object1.r + object2.r 
      //object2.y - object1.y < object1.r + object2.r) {
        console.log("colision done");
        Matter.Body.setStatic(object2.body,false);
  }
}
