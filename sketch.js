
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobObject1 = new Bob(100,300,10,10);
	bobObject2 = new Bob(200,300,10,10);
	bobObject3 = new Bob(300,300,10,10);
    bobObject4 = new Bob(400,300,10,10);
	bobObject5 = new Bob(500,300,10,10);

    roof1 = new Roof(400,50,400,10)
	 
	rope1 = new SlingShot(bobObject1.body,{x:200, y:50})
	rope2 = new SlingShot(bobObject2.body,{x:200, y:50})
	rope3 = new SlingShot(bobObject3.body,{x:200, y:50})
	rope4 = new SlingShot(bobObject4.body,{x:200, y:50})
	rope5 = new SlingShot(bobObject5.body,{x:200, y:50})

	Engine.run(engine);
  
}


function draw() {
  background(0);

  bobObject1 = display();
  bobObject2 = display();
  bobObject3 = display();
  bobObject4 = display();
  bobObject5 = display();

  roof1.display();
  
  drawSprites();
 
}



